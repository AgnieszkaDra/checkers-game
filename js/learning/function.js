function fn(param) {
    console.log(this, param);
}

const copy = fn.bind({ 'method': 'bind'}, 'bind');
copy();

fn.call({ method: 'call'}, 'call');

fn.apply({ method: 'apply'}, ['apply'])