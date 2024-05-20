  # ...
proc adi_project {project_name {mode 0} {parameter_list {}} } {
  # ...
  if [regexp "_dev_0" $project_name] {
    set device "dev_0_dead_coffee"
    set board [lindex [lsearch -all -inline [get_board_parts] *dev_0*] end]
  }
  if [regexp "_dev_1" $project_name] {
    set device "dev_1_dead_coffee"
    set board [lindex [lsearch -all -inline [get_board_parts] *dev_1*] end]
  }
  if [regexp "_dev_2" $project_name] {
    # ...
    set device "dev_2_dead_coffee"
    set board [lindex [lsearch -all -inline [get_board_parts] *dev_2*] end]
  }

  adi_project_create $project_name $mode $parameter_list $device $board
}
