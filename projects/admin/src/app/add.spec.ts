import { from } from 'rxjs';
import { add } from './add';

describe('Add Service',()=> {

  it('should add 2 numbers',()=> {
      const result = add(2,2);
      expect(result).toEqual(4);
  });

})
