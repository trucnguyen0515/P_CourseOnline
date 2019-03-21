
import '../Public/js/jqvmap';
import '../Public/js/jqvmapWorld';
import sample_data from '../Public/js/exampleData';

    jQuery('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: 'rgba(0,0,0,.1)',
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: true,
        showTooltip: true,
        scaleColors: ['#C8EEFF', '#006491'],
        values: sample_data,
        normalizeFunction: 'polynomial',
        onLabelShow: function (event, label, code) {
            label.html(label.html() + ' (View - ' + sample_data[code] + ')');
        },
    });
