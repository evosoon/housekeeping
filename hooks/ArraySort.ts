export default function Arraysort(arr : any, property : any, sort : boolean, isTime : boolean = false) {
	/**
	 * sort 表示排序方式  true表示升序  false表示降序
	 * isTime表示是否是按照时间进行排序
	**/
	if (isTime) {
		if (sort) {
			return arr.slice().sort((a, b) => Date.parse(a[property]) - Date.parse(b[property]))
		} else {
			return arr.slice().sort((a, b) => Date.parse(b[property]) - Date.parse(a[property]))
		}

	} else {
		if (sort) {
			return arr.slice().sort((a, b) => b[property] - a[property])
		} else {
			return arr.slice().sort((a, b) => a[property] - b[property])
		}
	}
}