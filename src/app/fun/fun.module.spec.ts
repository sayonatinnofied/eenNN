import { FunModule } from './fun.module';

describe('FunModule', () => {
  let funModule: FunModule;

  beforeEach(() => {
    funModule = new FunModule();
  });

  it('should create an instance', () => {
    expect(funModule).toBeTruthy();
  });
});
