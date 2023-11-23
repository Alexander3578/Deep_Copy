const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];

const user = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};

//1. Поверхностная копия student и user
// const copyUser = { ...user }; // Object
// console.log(user === copyUser);
// console.log(user.friends === copyUser.friends);
// const copyStudents = [...students];
// console.log(students === copyStudents);
// console.log(students['0'].name === copyStudents['0'].name);
// console.log(students[0] === copyStudents[0]);
//
// //2. Полная (глубокая) копия student и user
// const deepCopyUser = { ...user, friends: [...user.friends] };
// console.log(user === deepCopyUser);
// console.log(user.friends === deepCopyUser.friends);
// const deepCopyStudents = students.map((st) => ({ ...st }));
// console.log(students === deepCopyStudents);
// console.log(students[0] === deepCopyStudents[0]);
// console.log(students);
// console.log(deepCopyStudents);
//
//
// //5. Отсортируйте студентов по успеваемости (лучший идёт первым)
// console.log(students.sort((a, b) => b.scores - a.scores));
// // 5a. Отсортируйте студентов по алфавиту
// console.log(students.sort((a, b) => a.name > b.name ? 1 : -1))
// function sortByName(a, b) {
//     switch (a.name > b.name) {
//         case true:
//             return 1;
//         case false:
//             return -1;
//         default:
//             return 0;
//     }
// }
// console.log(students.sort((a, b) => a.name.localeCompare(b.name)));
// // const sortedByName = students.sort((a, b)=> a.name.localeCompare(b.name));
// // console.log(sortedByName);

// //6. Сформируйте массив студентов, у которых 100 и более баллов
// const bestStudents = students.filter((st) => st.scores >= 100);
// console.log(bestStudents);
//
// //6a.Сформируйте массив из трёх лучших студентов
// const topStudents = deepCopyStudents.sort((a, b) => b.scores - a.scores).splice(0, 3);
// console.log(topStudents);
// console.log(deepCopyStudents);
//
// //6b. Объедините массивы deepCopyStudents и topStudents так,
// // чтоб сохранился порядок сортировки
// const newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
// console.log(newDeepCopyStudents);
//7. Сформируйте массив холостых студентов
// const notMarriedStudents = students.filter((st) => !st.isMarried);
// console.log(notMarriedStudents);

//8. Сформируйте массив имён студентов
// const studentsNames = students.map((st) => st.name);
// console.log(studentsNames);
// //8a. Сформируйте строку из имён студентов, разделённых
// // - пробелом
// // - запятой
// console.log(studentsNames.join(' '))
// console.log(studentsNames.join(','))

//9. Добавьте всем студентам свойство "isStudent" со значением true
// const trueStudents = students.map((st) => ({ ...st, isStudent: true }));
// console.log(trueStudents);

//10. Nick женился. Выполните преобразование массива students
// let studentsWithMarriedNick = students.map(st => st.name === "Nick" ? {...st, isMarried: true} : st);
// const studentsWithMarriedNick = students.map((st) => {
//     if (st.name === "Nick") {
//         return { ...st, isMarried: true };
//     }
//     return st;
// });
// console.log(studentsWithMarriedNick);

//11. Найдите Студентку по имени Ann
// const ann = students.find((st) => st.name === "Ann");
// console.log(ann);
// console.log(students);
//12. Найдите студента с самым высоким баллом
// const bestStudent = students.reduce((acc, st) => {
//     return acc.scores > st.scores ? acc : st;
// });
// console.log(bestStudent);
// //12a. Найдите 2 студента с самым высоким баллом
// let bestStudent2 = students[0];
// let bestStudent3 = students[1];
// for (let i=1; i < students.length; i++) {
//     if (bestStudent2.scores > bestStudent3.scores) {
//         if (students[i].scores > bestStudent3.scores) {
//             bestStudent3 = students[i];
//         }
//     }
//     else {
//         if (students[i].scores > bestStudent2.scores) {
//             bestStudent2 = students[i];
//         }
//     }
//
// }
// let best1 = students[0]
// let best2 = students[0]
//
// for (let i = 0; i < students.length; i++) {
//     if (students[i].scores > best1.scores) {
//         best1 = students[i]
//
//     } else  if (students[i].scores > best2.scores ){
//         best2 = students[i]
//     }
//
// }
//13. Найдите сумму баллов всех студентов
// const scoresSum = students.reduce((acc, st) => acc + st.scores, 0);
// console.log(scoresSum);
// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

//  function addFriends(students) {
//      const studentsNames = students.map(st => st.name)
//      return students.map(stu => {
//          return {...stu, friends: studentsNames.filter(name => name !== stu.name)}
//      })
//  }
// //
// //     function getFriendsList(student){
// //         const friendsList = studentsNames.filter(name => student.name !== name)
// //         return friendsList
// //     }
// //     const studentsWithFriends = students.map(st => {
// //         return {...st, friends: getFriendsList(st)}
// //     })
// //     return studentsWithFriends
//
// // }
// const addFriends = (sts) => {
//     return sts.map((st) => ({
//         ...st,
//         friends: sts.map((st) => st.name).filter((name) => name !== st.name),
//     }));
// };

// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив students  и количество лучших студентов, которое надо получить в
// новом массиве. Если второго параметра нет, то по умолчанию возвращает лучшего студента
// getBestStudents(students) => {name: "Nick", age: 20, isMarried: false, scores: 120}
// getBestStudents(students, 3) => [{...}, {...}, {...}]
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]

// function getBestStudents(studentsArray, quantity = 0) {
//     const arrSize = studentsArray.length;
//     return quantity === 0
//     ? studentsArray.reduce((app, current) => app.scores > current.scores ? app : current )
//         : quantity - studentsArray.length <= 0
//             ? [...studentsArray.sort((a, b) => b.scores - a.scores).splice(0, quantity)]
//             : [...studentsArray.sort((a, b) => b.scores - a.scores).splice(0, quantity),
//                 ...Array(quantity - arrSize).fill(null)]
// }
//
// console.log(getBestStudents(students, 10))


//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
const repeatString = (str, repeatCount, symbolBetween) => {
    return (`${str} `.repeat(3).trim().split(' ').join(symbolBetween));
}
const repeatForString = (str, repeatCount, symbolBetween) => {
    let arr = [];
    for (let i = 0; i < repeatCount; i++) {
        arr.push(str)
    }
    return arr.join(symbolBetween)
}

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

const isBeginFromByStartWith = (str, strBegin) => {
    return str.toUpperCase().startsWith(strBegin.toUpperCase());
}
const isBeginFromBySlice = (str, strBegin) => {
    return str.toUpperCase().split('').slice(0, strBegin.length).join('') === strBegin.toUpperCase()
}
const isBeginFromByIndexOf = (str, strBegin) => {
    for (let i = 0; i < strBegin.length; i++) {
        if (str.toUpperCase().split('').indexOf(strBegin.toUpperCase().split('')[i]) !== i)
            return false;
    }
    return true;
}

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, num) => {
    return `${str.split('').splice(0, num).join('')}...`
}

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

const getMinLengthWord = (str) => {
    let trimStr = str.trim()
    return trimStr
        ? trimStr.split(' ').reduce((min, notMin) => notMin.length < min.length ? notMin : min, trimStr.split(' ')[0])
        : null
}

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (str) => {
    let trimmedStr = str.split(' ').map(el => el.trim()).filter(el => el !== ' '.trim()).join(' ');
    return trimmedStr.toLowerCase()
        .split(' ')
        .map((el) => `${el.split('')[0].toUpperCase() + el.split('').slice(1).join('')}`).join(' ');
}
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

const isIncludes = (str, dopStr) => {
    let dopStrArr = dopStr.toUpperCase().split('');
    let strArr = str.toUpperCase().split('');
    let result = false;
    for (let j = 0; j < dopStr.length; j++) {
        for (let i = 0; i < str.length; i++) {
            if(dopStrArr[j] === strArr[i]){
                result = true;
                break;
            } else result = false
        }
        if(result === false) return false
    }
    return result;
}

function checkSubstring(str, dopStr) {
    let dopStrArr = dopStr.toUpperCase();
    let strArr = str.toUpperCase();
    for (let char of dopStrArr) {
        if (!strArr.includes(char)) {
            return false;
        }
        strArr = strArr.replace(char, '');
    }
    return true;
}


console.log(checkSubstring("Incubator", "Incubator"))

