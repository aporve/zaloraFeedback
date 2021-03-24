let feedback;
let data = {};

function good() {
    document.getElementById('feedback').focus();
    feedback = 'good';
    console.error("feedback ----->", feedback );
}

function bad() {
    document.getElementById('feedback').focus();
    feedback = 'bad';
    console.error( "feedback ----->", feedback);
}

function details() {
    submitDetails = document.getElementById('feedback').value;
    data.feedback = feedback;
    data.submitDetails = submitDetails;
    console.error("Data", data);
    console.log("Data", data);
    // document.getElementById('feedback').value = ''
    // $("#form").trigger("reset");
}
