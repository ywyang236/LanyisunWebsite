$(function () {
    $('#conversion .auto_convesion').change(function () {
        convert(toCM($(this).val(), $(this).data("unit")))
    })

    function toCM(val, unit) {
        switch (unit) {
            case 'tm':
                return val * 30.3
            case 'ti':
                return val * 3.03
            case 'tc':
                return val * 0.303
            case 'm':
                return val * 100
            case 'cm':
                return val * 1
            case 'em':
                return val * 30.48
            case 'ei':
                return val * 2.54
        }
    }

    function convert(val) {
        $('#conversion #AA1').val(roundx(val / 30.3))
        $('#conversion #AA2').val(roundx(val / 3.03))
        $('#conversion #AA3').val(roundx(val / 0.303))
        $('#conversion #AA4').val(roundx(val / 100))
        $('#conversion #AA5').val(roundx(val / 1))
        $('#conversion #AA6').val(roundx(val / 30.48))
        $('#conversion #AA7').val(roundx(val / 2.54))
    }

    function roundx(val, precision = 2) {
        return Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, (precision || 0));
    }

    var rtype = 'cm'
    function volumetricChange() {
        var result = $("#volumetric #BB1").val() * $("#volumetric #BB2").val() * $("#volumetric #BB3").val() * $("#volumetric #BB4").val() / 1000000
        if(rtype == 'ei') {
            result *= 2.54 * 2.54 * 2.54
        }
        $("#volumetric #BB6").val(roundx(result, 3))
        $("#volumetric #BB5").val(roundx(result * 35.3, 3))
    }
    $('#volumetric #rtype input').change(function () {
        rtype = $(this).val()
        if (rtype == 'cm') {
            $('#volumetric #rtype #BR2').prop("checked", false)
            $('#volumetric span').each(function () {
                $(this).text('公分')
            })
        } else {
            $('#volumetric #rtype #BR1').prop("checked", false)
            $('#volumetric span').each(function () {
                $(this).text('英吋')
            })
        }
        volumetricChange()
    })
    $('#volumetric .auto_convesion').change(volumetricChange)
})