class StudentService {
    constructor($http, swal) {
        'ngInject'
        this.$http = $http
        this.swal = swal
    }

    all(data) {
        let page = data && data.page || 1
        let query = data && data.query || ''
        return this.$http.get('/api/students?page=' + page + '&query=' + query).then((response) => {
            return response.data
        })
    }

    update(student) {
        return this.$http.put('/api/students/' + student.id, student)
            .then(function(response) {
                return response.data
            })
            .catch(function() {
                this.swal.error("Sorry.", "Can't update student.")
            })
    }

    delete(student) {
        return this.$http.delete('/api/students/' + student.id)
            .then(function(response) {
                return response.data
            })
            .catch(function() {
                this.swal.error("Sorry.", "Can't delete student.")
            })
    }

}

export default StudentService