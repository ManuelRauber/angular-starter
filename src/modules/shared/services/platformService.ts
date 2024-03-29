export class PlatformService {
  private _iOS: boolean;
  private _isAndroid: boolean;

  public get isMobileDevice(): boolean {
    return this._iOS || this._isAndroid;
  }

  public get isMobileWeb(): boolean {
    // 768 is an Bootstrap 4 sm breakpoint.
    return window.innerWidth <= 768;
  }

  public get isWeb(): boolean {
    return !this.isMobileDevice;
  }

  public get isIOS(): boolean {
    return this._iOS;
  }

  public get isAndroid(): boolean {
    return this._isAndroid;
  }

  constructor() {
    this.guessPlatform();
  }

  private guessPlatform(): void {
    this._iOS = window.cordova && device && !!device.platform.match(/ios/gi);
    this._isAndroid = window.cordova && device && !!device.platform.match(/android/gi);
  }
}
