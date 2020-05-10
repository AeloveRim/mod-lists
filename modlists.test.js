const modlists = require('./modlists.json');
const _ = require('underscore');
const axios = require('axios').default;

test('parse JSON', () => {
    const data = JSON.stringify(modlists);
    const s = JSON.parse(data);
    expect(data).not.toBeNull();
    expect(data).not.toBeUndefined();
    expect(s).not.toBeNull();
    expect(s).not.toBeUndefined();
    expect(data).toEqual(JSON.stringify(s));
});
