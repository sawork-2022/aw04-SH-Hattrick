var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "0",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "20",
        "ok": "-",
        "ko": "20"
    },
    "maxResponseTime": {
        "total": "982",
        "ok": "-",
        "ko": "982"
    },
    "meanResponseTime": {
        "total": "692",
        "ok": "-",
        "ko": "692"
    },
    "standardDeviation": {
        "total": "291",
        "ok": "-",
        "ko": "291"
    },
    "percentiles1": {
        "total": "830",
        "ok": "-",
        "ko": "830"
    },
    "percentiles2": {
        "total": "888",
        "ok": "-",
        "ko": "888"
    },
    "percentiles3": {
        "total": "946",
        "ok": "-",
        "ko": "946"
    },
    "percentiles4": {
        "total": "980",
        "ok": "-",
        "ko": "980"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 50,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "-",
        "ko": "25"
    }
},
contents: {
"req_app-request-9e7b2": {
        type: "REQUEST",
        name: "app_request",
path: "app_request",
pathFormatted: "req_app-request-9e7b2",
stats: {
    "name": "app_request",
    "numberOfRequests": {
        "total": "50",
        "ok": "0",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "20",
        "ok": "-",
        "ko": "20"
    },
    "maxResponseTime": {
        "total": "982",
        "ok": "-",
        "ko": "982"
    },
    "meanResponseTime": {
        "total": "692",
        "ok": "-",
        "ko": "692"
    },
    "standardDeviation": {
        "total": "291",
        "ok": "-",
        "ko": "291"
    },
    "percentiles1": {
        "total": "830",
        "ok": "-",
        "ko": "830"
    },
    "percentiles2": {
        "total": "888",
        "ok": "-",
        "ko": "888"
    },
    "percentiles3": {
        "total": "946",
        "ok": "-",
        "ko": "946"
    },
    "percentiles4": {
        "total": "980",
        "ok": "-",
        "ko": "980"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 50,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "-",
        "ko": "25"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
