// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_wilayahpuskesmaskotawaringinlama_1rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmaskotawaringinlama_1rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmaskumpaibatuatas_2rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmaskumpaibatuatas_2rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmassambi_3rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmassambi_3rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmasruntu_4rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmasruntu_4rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmasarututara_5rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmasarututara_5rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmasipuhbangunjaya_6rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmasipuhbangunjaya_6rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmaspandusanjaya_7rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmaspandusanjaya_7rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmaspangkalanlada_8rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmaspangkalanlada_8rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmassungairangit_9rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmassungairangit_9rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmassemanggang_10rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmassemanggang_10rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmaskarangmulya_11rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmaskarangmulya_11rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmasmadurejo_12rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmasmadurejo_12rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmasmendawai_13rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmasmendawai_13rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmasarutselatan_14rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmasarutselatan_14rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmasnataipalingkau_15rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmasnataipalingkau_15rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmasriamdurian_16rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmasriamdurian_16rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmastelukbogam_17rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak Lengkap');
    }
}


function exp_wilayahpuskesmastelukbogam_17rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmaskumai_18rule0_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Lengkap');
    }
}


function exp_wilayahpuskesmaskumai_18rule1_eval_expression(context) {
    // SDMK_2024_Kobar_Status = 'Tidak lengkap'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SDMK_2024_Kobar_Status']  == 'Tidak lengkap');
    } else {
        return (feature['SDMK_2024_Kobar_Status']  == 'Tidak lengkap');
    }
}


function exp_label_KoordinatPuskesmasSDMK_19_eval_expression(context) {
    // concat('\nPuskesmas: ', SDMK_2024_Kobar_Puskesmas, '\nTahun: ', SDMK_2024_Kobar_Tahun, '\nDokter: ', SDMK_2024_Kobar_Dokter, '\nDokter Gigi: ', "SDMK_2024_Kobar_Dokter Gigi", '\nPerawat: ', SDMK_2024_Kobar_Perawat, '\nBidan: ', SDMK_2024_Kobar_Bidan, '\nPromosi Kesehatan: ', "SDMK_2024_Kobar_Promosi Kesehatan", '\nKesehatan Lingkungan: ', "SDMK_2024_Kobar_Tenaga Kesehatan Lingkungan", '\nATLM: ', SDMK_2024_Kobar_ATLM, '\nGizi: ', "SDMK_2024_Kobar_Tenaga Gizi", '\nKefarmasian: ', "SDMK_2024_Kobar_Tenaga Kefarmasian", '\nTotal: ', SDMK_2024_Kobar_Total, '\nStatus: ', SDMK_2024_Kobar_Status)

    var feature = context.feature;
    
    if (feature.properties) {
        return fnc_concat(['\nPuskesmas: ',feature.properties['SDMK_2024_Kobar_Puskesmas'] ,'\nTahun: ',feature.properties['SDMK_2024_Kobar_Tahun'] ,'\nDokter: ',feature.properties['SDMK_2024_Kobar_Dokter'] ,'\nDokter Gigi: ',feature.properties['SDMK_2024_Kobar_Dokter Gigi'] ,'\nPerawat: ',feature.properties['SDMK_2024_Kobar_Perawat'] ,'\nBidan: ',feature.properties['SDMK_2024_Kobar_Bidan'] ,'\nPromosi Kesehatan: ',feature.properties['SDMK_2024_Kobar_Promosi Kesehatan'] ,'\nKesehatan Lingkungan: ',feature.properties['SDMK_2024_Kobar_Tenaga Kesehatan Lingkungan'] ,'\nATLM: ',feature.properties['SDMK_2024_Kobar_ATLM'] ,'\nGizi: ',feature.properties['SDMK_2024_Kobar_Tenaga Gizi'] ,'\nKefarmasian: ',feature.properties['SDMK_2024_Kobar_Tenaga Kefarmasian'] ,'\nTotal: ',feature.properties['SDMK_2024_Kobar_Total'] ,'\nStatus: ',feature.properties['SDMK_2024_Kobar_Status'] ], context);
    } else {
        return fnc_concat(['\nPuskesmas: ',feature['SDMK_2024_Kobar_Puskesmas'] ,'\nTahun: ',feature['SDMK_2024_Kobar_Tahun'] ,'\nDokter: ',feature['SDMK_2024_Kobar_Dokter'] ,'\nDokter Gigi: ',feature['SDMK_2024_Kobar_Dokter Gigi'] ,'\nPerawat: ',feature['SDMK_2024_Kobar_Perawat'] ,'\nBidan: ',feature['SDMK_2024_Kobar_Bidan'] ,'\nPromosi Kesehatan: ',feature['SDMK_2024_Kobar_Promosi Kesehatan'] ,'\nKesehatan Lingkungan: ',feature['SDMK_2024_Kobar_Tenaga Kesehatan Lingkungan'] ,'\nATLM: ',feature['SDMK_2024_Kobar_ATLM'] ,'\nGizi: ',feature['SDMK_2024_Kobar_Tenaga Gizi'] ,'\nKefarmasian: ',feature['SDMK_2024_Kobar_Tenaga Kefarmasian'] ,'\nTotal: ',feature['SDMK_2024_Kobar_Total'] ,'\nStatus: ',feature['SDMK_2024_Kobar_Status'] ], context);
    }
}