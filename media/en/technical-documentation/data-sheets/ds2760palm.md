<!-- lastmod 2022-08-04 -->
<!-- image -->

## www.maxim-ic.com

## INTRODUCTION

Dallas Semiconductor's battery management support products allow the user to validate fuel gauging and power control within their product without committing significant resources to the task. Fuel gauging software is available for evaluation purposes on both the PC and PALM platforms as well as ANSI C source code capable of running within the target application. Developing a typical  DS2760-based application  usually  involves  the  integration  of  the  DS2760 into the battery pack, configuration of the device using the DS2760K Li + Battery Monitor Evaluation Kit, and performance evaluation using the DS2760K software on the PC or PALM handheld. The final phase of the development involves the integration of the fuel gauging function into the end equipment.

The  PALM  platform  is  a  convenient  vehicle  for  portably monitoring state-of-charge of the user's target rechargeable system.  The  DS2760  Fuel  Pack  software  runs  on  either Palm  III  or  Palm  m100  PDAs  and  communicates  to  a DS2760 through the Palm's Hotsync port using a specially modified DS9123. It then displays relevant cell information to the user.

## SETUP AND INSTALLATION

The DS2760 Fuel Pack is a standard Palm-executable that can be downloaded through either the Hotsync port  or  infrared  link  of  the  PDA.  For  proper  operation,  the  program  must  communicate  to  a  DS2760 through  a  specially  modified  DS9123  brick  attached  to  the  Hotsync  port  (See  the  appendix  for modification  details),  and  characterization  data  for  the  monitored  cell  must  already  be  stored  in  the DS2760's EEPROM. Cell characterization data is discussed in detail in Application Note 131: LithiumIon Fuel Gauging with Dallas Semiconductor Devices, and a memory map of how the cell data is stored can be found in the DS2760K demonstration kit datasheet. Once Fuel Pack is loaded onto the PDA and a DS2760  is  connected  through  a  DS9123  to  the  Hotsync  port,  tap  the  Fuel  Pack  icon  to  execute  the program. Cell characterization data is read from the DS2760 only at the start of the program; therefore, to ensure  accurate  readings,  the  program  must  be  restarted  each  time  the  cell  pack  being  monitored  is changed.

## DS2760PALM

## Fuel Pack Demonstration Software for Palm III and m100 PDAs

PARAMETER DISPLAY Figure 1

<!-- image -->

## OPERATION

Upon execution of the program, the Dallas  Semiconductor  logo  screen will appear for several seconds showing  the  program  revision  and date. At this time, the program will attempt  to  initialize  the  DS9123.  If unsuccessful, an error message will be displayed warning of a communication  problem.  Once  the DS9123  is  initialized,  the  program will proceed to the fuel gauge display screen. In order for the fuel gauging algorithms to report the remaining active and standby

<!-- image -->

runtimes accurately, the user must enter a power consumption reference. To do this, select the Update Power Baselines option from the menu  (Figure  2).  Next,  enter  the  device's  active  and  standby  power consumption in watts into the two blanks provided and tap CONTINUE (Figure 3). Failure to enter either of these values correctly will cause the corresponding runtime value to not be displayed during program operation.

FUEL GAUGING DATA Figure 4

<!-- image -->

RAR : Remaining Active Runtime in minutes - Calculated from the remaining energy (RE) value and the active power baseline entered by the user. Predicts when the cell will reach full discharge when the handset is in the active mode of operation. Figure 4 shows 11 minutes remaining.

RSR : Remaining Standby Runtime in minutes - Calculated from the RE value and the standby power baseline entered by the user. Predicts when the cell will reach full discharge when the handset is left in the standby mode of operation. Figure 4 shows 117 minutes remaining.

TTFC : Time Remaining to Full Charge in minutes - An estimation of time required to fully charge the cell  based  on  characterization  data  and  the  cell's  present  state  of  charge.  Figure  4  shows  97  minutes remaining.

RE : Remaining Energy in joules - An estimation of remaining energy in the cell based on the active power baseline and the present temperature. Figure 4 shows 1410 joules remaining.

Once the power baselines have been entered, the program moves on to  its  active  display  screen  where  it  will  continuously  report  fuelgauging parameters. During this time, communication to the DS2760 takes  place  continuously  as  real-time  values  of  cell  temperature, voltage,  current,  and  accumulated  current  are  updated.  Real-time information is displayed on the right-hand side of the screen directly across from the corresponding parameter (Figure 4). Tapping on any of  the  parameters  located  on  the  left-hand  side  of  the  screen  will bring  up  a  display  window  showing  the  parameter  name  and  the units in which the reported value is displayed. These parameters are summarized as follows:

RAC : Remaining Absolute Capacity in milliamp-hours -  An  estimation  of  remaining  charge  in  the cell based on active power baseline, present temperature, and cell characterization data. Figure 4 shows 123 milliamp-hours remaining.

RRC : Remaining Relative Capacity in percentage - The remaining absolute capacity (RAC) expressed as a percentage of the cell's full capacity. Figure 4 shows 24 percent remaining.

TAD : Total Accumulated Discharge in milliamp-hours -  A  cumulative total of all charge measured leaving  the  cell  over  its  operating  life.  Figure  4  shows  0  accumulated  milliamp-hours  of  discharge.

DS2760 : The final parameter displayed at the bottom of the screen is the unique, 64-bit net address of the DS2760. Figure 4 shows the net address of the DS2760 as E000000000393230.

The FULL , EMTPY ,  and LEARN buttons  at  the  top  of  the  screen (Figure  4)  are  present  to  allow  the  user  to  remove  long  term  error accumulation from the system. Each time the cell is fully discharged, the user should tap the EMTPY button. This will reset the fuel gauge to 0%, the expected empty point for the present operating conditions. Each  time  the  cell  is  fully  charged,  the  user  should  tap  the FULL button. This resets the fuel gauge to 100% or the expected full point based on present conditions. Finally, the LEARN function will alter the characterization data stored inside the DS2760 to reflect present RAC value. LEARN should be used only after a known good charge from completely empty to completely full has taken place, as these changes  will  affect  the  accuracy  of  the  fuel  gauge  for  all  future readings.  The  user  should  select  either LEARN or FULL after  a charge,  not  both;  taping  both  will  have  a  negative  effect  on  the

LEARN OPTION Figure 5

<!-- image -->

accuracy of the fuel gauge. Because an accidental press of any of these buttons will cause the fuel gauge to become inaccurate, a pop up window will appear prompting the user to confirm or cancel the action.

The parametric tab  at the top of the screen will  bring  the  user  to  the  parametric  data  page.  This  page displays all real time measurements made by the DS2760. The displayed values are automatically updated with each poll from the software. These values are as follows:

REAL-TIME DATA Figure 6

<!-- image -->

VOLT :

Cell  voltage  measured  directly  from  the  Vin  pin  of the DS2760 displayed in volts.

CURR :

Current  flow  measured  across  the  sense  resistor  in milliamps. Positive current is flowing into the pack, negative current is flowing out.

ACC :

Accumulated  current  value  integrated  over  time  by the DS2760 and stored in milliamp-hours.

TEMP :

Temperature of the DS2760 in degrees Celsius.

The memory tab at the top of the screen will bring the user to the last page of data. The memory page displays all data inside the DS2760 including  user  registers,  real  time  data,  user  EEPROM,  and  user SRAM. The data is displayed in hexadecimal format eight bytes at a time. To view the next eight bytes of data by address, tap the NEXT button. To view the previous eight bytes of data by address, tap the PREV button. Finally, the UPDATE button will refresh the displayed  data  with  new  readings  from  the  DS2760.  The  memory page  is  read  only  to  protect  the  parametric  data  for  the  fuel  gauge stored in EEPROM.

## APPENDIX

The standard DS9123 communication brick is designed to interface from a computer's serial port through a male DB9 connector to a 1-Wire bus through an RJ-11 connector. The Palm's Hotsync cable connection is different from a standard serial port; the DS9123 must therefore be modified to interface to the Palm.

Refer to the following steps to modify a DS9123:

1. Remove female DB9 connector and circuit board from plastic housing.
2. Unsolder female DB9 connector from circuit board and discard.
3. Replace with a male DB9 connector using the following pin to pad assignments. All other pins and pads are no connects.
4. Reinsert circuit board and male DB9 connector into plastic housing.

|   DB9 Connector Pin |   Circuit Board Pad |
|---------------------|---------------------|
|                   1 |                   1 |
|                   3 |                   2 |
|                   5 |                   5 |
|                   6 |                   4 |
|                   8 |                   7 |

MEMORY DATA Figure 7

<!-- image -->