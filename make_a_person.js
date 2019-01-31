var Person = function(firstAndLast) {
    let fullname = firstAndLast;

    this.getFullName = function() {
        return fullname;
    };

    this.getFirstName = function() {
        let first = fullname.split(" ")[0];
        return first;
    }

    this.getLastName = function() {
        let second = fullname.split(" ")[1]
        return second;
    }

    this.setFirstName = function(first) {
        let names = fullname.split(" ");
        names[0] = first
        return fullname = names.join(" ").toString();
    }
    this.setLastName = function(last) {
        let names = fullname.split(" ");
        names[1] = last;
        return fullname = names.join(" ").toString();
    }
    this.setFullName = function(firstAndLast) {
        return fullname = firstAndLast;
    }
};

var bob = new Person('Bob Ross');
