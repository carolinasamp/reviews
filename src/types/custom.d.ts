interface NodeModule {
  hot?: {
    accept(path?: string, callback?: () => void): void;
    dispose(callback: (data: any) => void): void;
    data: any;
  };
}

declare var google: any;
