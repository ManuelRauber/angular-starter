import {DeviceFeatures} from '../models/deviceFeatures';

export class DeviceFeaturesService {
  public detect(): DeviceFeatures {
    const features = new DeviceFeatures();

    features.touch = this._detectTouch();

    return features;
  }

  private _detectTouch(): boolean {
    return ('ontouchstart' in window)
      || (navigator.maxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0);
  }
}
