import isEmail from './isEmail';

export default function containsEmail(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '@') {
            let l = i-1;
            let r = i+1;
            while (l != 0 || r != str.length) {
                if (isEmail(str.substr(l,r)))
                if (l != 0)
                    l--;
                if (r != str.length)
                    r++;
            }
        }
    }
    return false;
}