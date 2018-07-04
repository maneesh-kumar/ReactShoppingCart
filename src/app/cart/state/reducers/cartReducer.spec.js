import * as ActionTypes from "../ActionTypes";

import reducer from "./cartReducer";

//test suites
describe ("cart reducer suite", () => {

    //test case
    it ("should be empty list ", () => {
        expect(reducer (undefined, {} ) ).toEqual([]);
    })

    it ("should be 1 list item ", () => {
        expect(reducer ([{id: 1}], {type: 'UNKWNN'} ) )
            .toEqual([{id: 1}]);
    })
})