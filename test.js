var name = 'aaa';

function setNmae(_name) {
    name = _name;
}

function printName() {
    console.info(name);
}
exports.setName = setNmae;
exports.printName = printName;