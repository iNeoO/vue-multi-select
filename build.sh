#!/usr/bin/env bash

vue_path="./src/components/vueMultiSelect/vue-multi-select"
vue_dist="./dist/vue-multi-select"
vue_js_file="${vue_path}.js"
vue_css_file="${vue_path}.css"
vue_template_file="${vue_path}.vue"
vue_file="${vue_dist}.vue"

[[ -f "${vue_file}" ]] && rm -v "${vue_file}"

sed -e "/script/d; /style /d;" "${vue_template_file}" > "${vue_file}"

printf '<script>\n%s\n</script>\n\n' "$(<${vue_js_file})" >> "${vue_file}"
printf '<style>\n%s\n</style>\n' "$(<${vue_css_file})" >> "${vue_file}"
