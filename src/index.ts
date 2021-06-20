import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @swan/theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@swan/theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @swan/theme is activated!');
    const style = '@swan/theme/index.css';
    manager.register({
      name: 'JupyterLab SwanTheme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;