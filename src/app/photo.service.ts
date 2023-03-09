import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  private async getLocation() {
    const location = await Geolocation.getCurrentPosition();
    return location.coords;
  }

  async takePhoto() {
    await this.getLocation();
    await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    })
  }
}
