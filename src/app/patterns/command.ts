abstract class Command {
  public abstract execute(): void;
}

class LogCommand extends Command {
  public execute(): void {
    console.log('logging...');
  }
}

class AppLaunchCommand extends Command {
  private appState: AppState;

  constructor(appState: AppState) {
    super();
    this.appState = appState;
  }

  public execute(): void {
    this.appState.launch();
  }
}

class AppStopCommand extends Command {
  private appState: AppState;

  constructor(appState: AppState) {
    super();
    this.appState = appState;
  }

  public execute(): void {
    this.appState.stop();
  }
}

class AppState {
  private active: boolean;

  public launch(): void {
    console.log('app launched');
    this.active = true;
  }

  public stop(): void {
    console.log('app stopped');
    this.active = false;
  }
}

export const commandApplication = (): void => {
  const appState = new AppState();
  const appLaunchCommand = new AppLaunchCommand(appState);
  const appStopCommand = new AppStopCommand(appState);
  const logCommand = new LogCommand();
  appLaunchCommand.execute();
  appStopCommand.execute();
  logCommand.execute();
};
