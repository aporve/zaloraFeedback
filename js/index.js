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

    // var feedbackDetails = {}
    // var raw = JSON.stringify({
    //     "details": {
    //     "companyName": "ZALORA",
    //     "feedback-emoji": feedback,
    //     "user-feedback": document.getElementById('feedback').value
    //     }
    // });

    // feedbackDetails['data'] = raw;
    // window.parent.postMessage(JSON.stringify({
    //     event_code: 'ym-client-event', data: JSON.stringify({
    //       event: {
    //         code: "feedback",
    //         data: feedbackDetails,
      
    //       }
    //     })
    //   }), '*');

    
    var feedbackDetails = {}
    var raw = JSON.stringify({
        "details": {
        "companyName": "ZALORA",
        "feedback-emoji": feedback,
        "user-feedback": document.getElementById('feedback').value
        }
    });

    feedbackDetails.data = raw;
    window.parent.postMessage(JSON.stringify({
        event_code: 'ym-client-event', data: JSON.stringify({
            event: {
            code: "feedback",
            data: feedbackDetails,
        
            }
        })
    }), '*');

    console.log("Feedback Details ---->",feedbackDetails);
}
