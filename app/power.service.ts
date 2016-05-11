/**
 * Created by peter on 16-5-11.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class PowerService {

  getAllPowers() {
    return ['123', '456', '789'];
  }
}
