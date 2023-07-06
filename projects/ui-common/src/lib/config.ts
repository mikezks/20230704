import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from "@angular/core";


export interface ConfigType {
  firstname: string;
  lastname: string;
}

export const CONFIG = new InjectionToken<ConfigType>('CONFIG', {
  providedIn: 'root',
  factory: () => ({
    firstname: 'Peter',
    lastname: 'Huber'
  })
});

export function provideConfig(config: ConfigType): EnvironmentProviders {
  return makeEnvironmentProviders([{
    provide: CONFIG,
    useValue: config
  }])
}
