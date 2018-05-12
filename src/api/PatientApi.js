import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const patients = [
    {
        id: "1",
        firstname: "patient 1",
        lastname: " patient 1",
        birthday: "2000-02-02",
        phoneNumber: "+123456789",
        email: "asm@gmail.com"
    },
        {
        id: "2",
        firstname: "patient 2",
        lastname: " patient 2",
        birthday: "2000-10-13",
        phoneNumber: "+123456789",
        email: "asm@gmail.com"
    },
        {
        id: "3",
        firstname: "patient 3",
        lastname: " patient 3",
        birthday: "1990-05-01",
        phoneNumber: "+123456789",
        email: "asm@gmail.com"
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (patient) => {
    return replaceAll(patient.firstname, ' ', '-');
};

class PatientApi {
    static getAllPatients() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], patients));
            }, delay);
        });
    }

    static savePatient(patient) {
        patient = Object.assign({},patient); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minPatientfirstnameLength = 1;
                if (patient.firstname.length < minPatientfirstnameLength) {
                    reject(`firstname must be at least ${minPatientfirstnameLength} characters.`);
                }

                if (patient.id) {
                    const existingPatientIndex = patients.findIndex(a => a.id === patient.id);
                    patients.splice(existingPatientIndex, 1, patient);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new patients in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    patient.id = generateId(patient);
                    patient.watchHref = `http://www.pluralsight.com/patients/${patient.id}`;
                    patients.push(patient);
                }

                resolve(patient);
            }, delay);
        });
    }

    static deletePatient(patientId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfPatientToDelete = patients.findIndex(patient => patient.id === patientId);
                patients.splice(indexOfPatientToDelete, 1);
                resolve();
            }, delay);
        });
    }


    static getPatient(patientId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingPatientIndex = patients.findIndex(patient => patient.id === patientId);
                const patientFound = Object.assign({}, patients[existingPatientIndex]);
                resolve(patientFound);

            }, delay);
        });
    }

}

export default PatientApi;
