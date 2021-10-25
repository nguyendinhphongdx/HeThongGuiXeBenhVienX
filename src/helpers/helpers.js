import jwt from "jsonwebtoken";
import { colorRandom } from "../anothers/constants";
import { LAYOUTCONSTANTS } from "../redux/config/constant";
class HelperClass {
  numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return Math.floor(num / 1000) + "K";
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num < 999) {
      return num;
    }
  }
  VerifyToken = token => {
    // const result = jwt.verify(token, "key_secret", function (err, decoded) {
    //   if (err) {
    //     return null;
    //   } else {
    //     return token;
    //   }
    // });
    // console.log("veryfy token", result);
    return token;
  };
  CountPercent(data, Other = true) {
    var total = 0;
    data.forEach(element => {
      total += element.value;
    });
    data = data.map(item => {
      return {
        key: item.key,
        value: Math.round((item.value / total) * 100),
      };
    });
    data.sort((a, b) => b.value - a.value);
    if (Other) {
      const other = data.splice(2);
      var valueOther = 0;
      other.forEach(item => {
        valueOther += item.value;
      });
      data.push({
        key: "Other",
        value: valueOther,
      });
    }
    return data;
  }
  randomColorNotDuplicate(length) {
    const keys = Object.keys(colorRandom.names);
    const values = Object.values(colorRandom.names);
    var arrayColor = keys.map((item, index) => values[index]);
    var result = [];
    for (var i = 0; i < length; i++) {
      result.push(
        ...arrayColor.splice(Math.floor(Math.random() * arrayColor.length), 1)
      );
    }
    return result;
  }
  addFieldColorRandom = data => {
    const arrayRandomColor = this.randomColorNotDuplicate(data.length);
    return data.map((item, index) => {
      return {
        ...item,
        color: arrayRandomColor[index],
      };
    });
  };
  SetLoading(loading, dispatch) {
    console.log(loading);
    dispatch({ type: LAYOUTCONSTANTS.LOADING, payload: loading });
  }
  getDateNowString(time) {
    let date = time ? new Date(time) : new Date();
    let month =
        date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1,
      day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let dateNow = date.getFullYear() + "-" + month + "-" + day;
    return dateNow;
  }
  cutChartData(data) {
    const result = data.filter(item => {
      if (!isNaN(item.value) && item.value != 0) {
        return {
          ...item,
          value: Number(item.value),
        };
      }
    });
    return result;
  }
  devideCard(array) {
    const nGroup = array.length / 4;
    var newArray = [];
    for (var i = 0; i < nGroup; i++) {
      var coppyArray = [...array];
      var newE = coppyArray.slice(i * 4, i * 4 + 4);
      newArray.push(newE);
    }
    return newArray;
  }
  filterStudentInClass(members, students) {
    const studentInfo = members.map(member => {
      return students.find(
        student => JSON.stringify(student._id) === JSON.stringify(member)
      );
    });
    return studentInfo;
  }
  filterStudentByKeys(keys, students) {
    const result = keys.map(item => {
      const student = students.find(
        _item => JSON.stringify(_item.key) === JSON.stringify(item)
      );
      return student ? student._id : null;
    });
    return result;
  }
  devideStudentInClass(members, students) {
    const inClass = members.map(member => {
      return students.find(
        student => JSON.stringify(student._id) === JSON.stringify(member)
      );
    });
    const NotInClass = students.filter(
      student => !members.includes(student._id)
    );

    return {
      inClass,
      NotInClass,
    };
  }
  filterStudentInClass(members, students) {
    const studentInfo = members.map(member => {
      return students.find(
        student => JSON.stringify(student._id) === JSON.stringify(member)
      );
    });
    return studentInfo;
  }
  filterClassInStudent(classes,listClass){
    const result= classes.map(item => {
        return listClass.find(_item =>JSON.stringify(_item._id)===JSON.stringify(item))
    })
    return result;
  }
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  getInForFromNameFile(namefile){
    const arr = namefile.split(".");
    return {
      licence:arr[0],
      color:arr[1],
      type:arr[2],
    }
  }
  getDateInputDate(time){
    const date = new Date(time);
    let month =
        date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1,
      day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let dateNow = date.getFullYear() + "-" + month + "-" + day;
    return dateNow;
  }
  getTimeInputTime(time){
    const date = new Date(time);
    const timeNow = date.getHours() < 10?`0${date.getHours()}`:date.getHours();
    const minuteNow = date.getMinutes() < 10?`0${date.getMinutes()}`:date.getMinutes();
    return timeNow +":"+minuteNow;
  }
}
export default new HelperClass();
