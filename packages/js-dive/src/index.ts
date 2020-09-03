export interface JSDiveOptions {
  maxDepth?: number;
  maxArrayLength?: number;
}

export interface JSDiveItem {
  accessor: (string | number)[];
  depth: number;
  type: string;
  value: string | number | boolean | any[];
}

export enum JSDiveNotificationTypes {
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

export interface JSDiveNotification {
  type: JSDiveNotificationTypes;
  message: string;
}

/**
 * { a: { b: [ { c: 'answer' } ] } }
 * a.b[0].c = 'answer'
 */
export default class JSDive {
  items: JSDiveItem[];
  notifications: JSDiveNotification[];
  options: JSDiveOptions;

  constructor(options: JSDiveOptions = {}) {
    this.items = [];
    this.notifications = [];
    this.options = {
      ...JSDive.defaultOptions(),
      ...options,
    };
  }

  static defaultOptions() {
    return {
      maxDepth: 50,
      maxArrayLength: 10000,
    };
  }

  static keeperTrapper(
    value: any,
    accessor: (string | number)[],
    depth: number
  ): JSDiveItem {
    return {
      accessor,
      depth,
      type: Array.isArray(value) ? 'array' : typeof value,
      value,
    };
  }

  view() {
    return {
      match: !!this.items.length,
      count: this.items.length,
      items: this.items,
      notifications: this.notifications,
    };
  }

  search(value, data) {
    this.recursiveSearch(value, data);
  }

  recursiveSearch(value, data, accessor = [], depth = 0) {
    if (depth > this.options.maxDepth || !value || value === '') {
      return;
    }

    if (['string', 'number'].indexOf(typeof data) > -1) {
      const strValue = value.toString();
      const strData = data.toString();
      if (
        strData &&
        strValue &&
        strData.toLowerCase().indexOf(strValue.toLowerCase()) > -1
      ) {
        this.items.push(JSDive.keeperTrapper(data, accessor, depth));
      }
    } else if (Array.isArray(data)) {
      if (data.length > this.options.maxArrayLength) {
        this.notifications.push({
          type: JSDiveNotificationTypes.WARNING,
          message: `Array too long! Not searching: ${accessor}`,
        });
      } else {
        depth += 1;
        for (let n = 0; n < data.length; n += 1) {
          this.recursiveSearch(value, data[n], [].concat(accessor, [n]), depth);
        }
      }
    } else if (typeof data === 'object') {
      const objDepth = depth + 1;
      for (const i of Object.keys(data)) {
        this.recursiveSearch(
          value,
          data[i],
          [].concat(accessor, [i]),
          objDepth
        );
      }
    }
  }
}
