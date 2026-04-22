<!-- lastmod 2025-02-10 -->
<!-- image -->

## Evaluates: MAX16550/

MAX16550A/MAX16550B

## General Description

The MAX16550 family are protection ICs with integrated low-resistance  MOSFETs  and  lossless  current  sense circuitry featuring SMBus/PMBus™ control and reporting.

The IC is  designed  to  provide  the  optimum  solution  for distribution,  control,  monitoring,  and  protection  of  the system's 12V power supply. An internal LDO provides the supply voltage for the protection IC.

If no fault is detected, the IC initiates the startup and has been designed to provide controlled, monotonic startup. Programmable soft-start ramp and delay is implemented to limit the in-rush current during startup.

The IC monitors the current, voltage and power of the 12V system power rail and provides multiple levels of protection with fast turn-off if a fault is detected.

Maxim's patented, lossless current sense provides highaccuracy  current-sensing  over  load  and  temperature, improving overall system-energy efficiency, and reducing dissipation.

Output  voltage  is  monitored  at  all  times.  If  at  any  time the  output  voltage  falls  below  the  programmable  output undervoltage-lockout  threshold,  the  PWRGD  signal  is asserted low. If, at any time, the input voltage falls below the programmable input undervoltage lockout threshold, the  PWRGD  signal  is  asserted  low.  These  ICs  can  be programmed  through  PMBus  to  provide  input  overvoltage protection.  Input  overvoltage  protection  is  disabled  by default. When  enabled  through  PMBus,  if  the input voltage exceeds a programmable overvoltage threshold, the MOSFET is latched off and a fault indicated.

The  evaluation  kit  (EV  kit)  consists  of  an  assembled and tested printed circuit board implementation of a 12V power distribution network using the MAX16550 protection  ICs.  All  of  the  MAX16550  features  can  be  verified using  this  EV  kit.  More  thorough  explanations  of  topics discussed in this manual may be found in the MAX16550 data sheet.

The  MAX16550  EV  kit  also  evaluates  the  MAX16550A and  MAX16550B  devices  if  the  board  is  reworked  to replace U7 accordingly.

©

Click here to ask an associate for production status of specific part numbers.

## MAX16550 Evaluation Kit

## Features

- High-Density (4mm x 4.5mm for 30A): Less than 25% of the Board Area of Conventional Solutions
- Monolithic Integration of Power, Control, and Monitoring
- Integrated Power MOSFET with 1.9mΩ Total Resistance in 12V Power Path (R DS(ON) , Including Package)
- Integrated Lossless, Precise Current Sensing
- Integrated LDO Provides V DD  Supply (1.8V Bias Supply)
- Enables Advanced System Power ManagementPMBus/SMBus Telemetry with Extensive Status Monitoring and Reporting
- Load Current Indicator (I LOAD ) Pin Provides Analog Output Current Reporting with High Accuracy
- Programmable Soft-Start for Inrush Current Limiting
- Detection and Isolation of Severe Overcurrent in Less than 5μs
- Fail-Safe Overcurrent (Safe-OCP) Detection and Isolation in Less than 250ns
- Three Levels of Programmable Overcurrent Protection
- VIN -to-V OUT  Short Protection During Startup

## Additional Features

- Programmable Soft-Start and Delay
- Programmable Input Undervoltage-Lockout Threshold (UVLO)
- Programmable Power-Good Threshold
- PWRGD Pin for Output UVLO/Input UVLO Reporting
- FAULTB Pin for Fault Reporting

## Systems and Applications

Servers, Networking, Storage, Communication Equipment and AC/DC Power Supplies

- Integrated Protection IC on 12V
- Electronic Circuit Breaker, Hot Swap
-  240VA

Ordering Information appears at end of data sheet.

319-100368; Rev 3; 7/23

## MAX16550 Evaluation Kit

## MAX16550 EV KIT Board Photos

<!-- image -->

Evaluates: MAX16550/

<!-- image -->

│

## Table 1. System Configuration

Note 1: For electronic circuit breaker operation, add desired input capacitors C IN .

| Parameter                                                                | Component/Setting                               |
|--------------------------------------------------------------------------|-------------------------------------------------|
| Integrated Protection IC on 12V Bus                                      | MAX16550                                        |
| Input Capacitors                                                         | (Note 1)                                        |
| Output Capacitors                                                        | 2 x 330µF (OS-CON) 1 x 10µF 1 x 2.2µF 1 x 0.1µF |
| PMBus Address Programming Resistor (R23)                                 | 1.78kΩ                                          |
| PMBus Address                                                            | 40h                                             |
| Input Transient Voltage Suppressor                                       | 20V, 600W                                       |
| Output Schottky Diode                                                    | 30V, 2A                                         |
| Pullup Resistors (FAULTB, PWRGD, SMBUS_DATA, SMBUS_CLOCK, SMBUS_ALERTB)  | 5 x 10kΩ (0402)                                 |
| EN/UVLO Voltage Divider (R15, R16)                                       | 1 x 20kΩ 1 x 2.26kΩ                             |
| Input UVLO Threshold                                                     | 9.85V                                           |
| Bootstrap Capacitor                                                      | 0.22µF                                          |
| Soft-Start Capacitor C SS (C2)                                           | 47nF (0402, 25V)                                |
| Soft-Start Time                                                          | 19ms                                            |
| R OCP (R9 + R10/R11). Moderate/Severe OCP Threshold Programming Resistor | 1 x 158kΩ 1 x 237kΩ                             |
| Moderate OCP Threshold                                                   | 34A/20A                                         |
| Severe OCP Threshold (Default)                                           | 44A/26A                                         |
| R ILOAD (R13). Current Reporting Resistor                                | 8.66kΩ                                          |
| I LOAD Reporting Range                                                   | 0 - 31.2A                                       |
| PMBus Settings                                                           |                                                 |
| Severe OCP Threshold                                                     | 130% of Moderate/Reference OCP                  |
| Severe OCP Timeout                                                       | 0µs                                             |
| Input OVP Protection                                                     | 14V (Disabled by default)                       |
| Startup Delay                                                            | 0µs                                             |
| Output PWRGD Threshold                                                   | 11V                                             |
| Self-Test Threshold                                                      | 9V                                              |
| Overtemperature Warning/Fault Thresholds                                 | Disabled/135°C                                  |
| Input Overpower Warning Threshold                                        | Disabled                                        |
| Reporting and Warning Averaging Size                                     | 1 Sample                                        |
| Output Overcurrent Warning                                               | Disabled                                        |
| Input/Output Undervoltage Warning                                        | Disabled                                        |
| Current Hysteresis                                                       | Disabled                                        |
| Startup OCP                                                              | 8A                                              |
| Moderate OCP Timeout                                                     | 100µs                                           |

## MAX16550 Evaluation Kit

## Additional Components

- Additional input capacitors can be added if electronic circuit breaker configuration is desired. By default, the EV kit has no input capacitors (Hot-Swap configuration).
- 100mA LDO to provide 3.3V pullup voltage for PMBus and LEDs.
- A transient voltage suppressor to protect MAX16550 from damage in case of high inductance input connection.

The EV kit provides additional circuitry for measurements and testing:

- PMBus interface for telemetry and programming
- Fast output short to ground
- 'On-the-Fly' Moderate/Severe OCP threshold change (MAX16550)
- 'On-the-Fly' Severe OCP threshold change
- Soft-start capacitor C\_SS discharge fail
- Pass FET short protection
- Wrong ROCP or SMBUS\_ID resistor fault detection

Additional  components  like  sense/test  jumpers  and connectors could be loaded on the board.

## Getting Started

The following steps explain how to verify the EV kit operation:

- 1) There are four board standoffs provided with the EV kit. These standoffs should be installed on holes located on each edge of the board.
- 2) Check that J14 jumper is not loaded for initial board operation. This jumper is used to perform FET short protection tests. See chapter ' Using the EV Kit, ' section ' MAX16550 Protection Against Faults Validation ' for details.
- 3) Check that all the following switches are in the correct position:
- a)  SW2: Switch is used to control EN/UVLO signal.
- b)  EN/UVLO should be set low before startup (SW2 pointing away from the edge of the board) SW4: Switch  to  enable  circuitry  for  VOUT  to  GND short  testing.  Set  SW4  to  off  position  at  startup (switch pointing towards the USB connector). See chapter  " Using  the  EV  Kit,"  section  "MAX16550 Protection Against Fault Validation " for details.
- 4) Monitoring
- a)  Output voltage can be monitored at J10.
- b)  Input voltage on the MAX16550 VIN pins can be monitored by connecting a voltmeter across J12 or placing a differential oscilloscope probe in J12.
- c)  Load current as reported by the MAX16550 can be  monitored  by  connecting  a  voltmeter  across J9  pins  13  and  14.  See  chapter  ' Using  the  EV Kit ,' section ' Analog Load Current Reporting ' for details.
- d)  Soft-start voltage (SS pin) across soft-start capacitor can be monitored using J13.
- e)  PWRGD reporting pin can be monitored on J9\_4. LED D5 should  illuminate  when  the  PWRGD  is asserted high.
- f) FAULTB reporting pin can be monitored on J9\_6. LED  D3  should  illuminate  when  the  FAULTB  is asserted low.
- g)  EN/UVLO signal at the IC pin can be monitored on J9\_2.
- h)  Use  J19  connector  (pins  1  and  3)  to  accurately measure voltage across device (V OUT  - V IN ).
- 5) Connect a powered off 12V power source to terminal blocks J2 (+12V) and J3 (GND).
- 6) Turn on the 12V input power source. Make sure that the power source is not current limited. Note that 3.3V voltage is provided by LDO (loaded by default). This LDO is powered by 12V input supply. Therefore, if accurate 12V input current measurement is desired, disable the LDO by removing R30 and R31. If LDO is disabled, a 3.3V should be supplied to J4.
- 7) Verify that there is no fault reported: FAULTB is not asserted low; LED D3 is not illuminating.
- 8) Verify that PWRGD is asserted LOW. LED D5 is NOT illuminating.
- 9) Enable output voltage by toggling SW2. Output voltage should ramp up to 12V within programmed soft start time. FAULTB should stay de-asserted (LED D3 should not illuminate) and PWRGD signal should be asserted high (LED D5 should illuminate).

## Evaluates: MAX16550/ MAX16550A/MAX16550B

## MAX16550 Evaluation Kit

## Using the EV Kit

Detailed product and applications information for the integrated protection IC can be found in the MAX16550 data sheet. Links to the EV kit's top and bottom silkscreen layers, assembly drawings for the board, and schematic are located at the end of this document.

## PMBus Communication

The  device  supports  wide  range  of  PMBus  features  as described in the data sheet. The EV kit supports PMBus communication  by  using  the  MAXPOWERTOOL002 connected between the computer and J18. The MAXPOWERTOOL002  is  the  USB-to-PMBus  interface Dongle  for  power  products.  The  MAXPOWERTOOL Software  is  the  Windows  XP,  Vista,  Windows  7,  and Windows 10 compatible software that provides a simple graphical user interface (GUI) for exercising the features of the IC. The MAXPOWERTOOL Software allows a PC to  control  the  PMBus  interface  and  to  collect  real-time data from the EV kit.

## Programmable Soft Start

The  MAX16550  implements  soft  start  with  externally programmable  soft  start  time  (through  soft-start  capacitor C2). Default soft start time is described in Table 1. A different soft-start time T SS  can be obtained by changing the value of C2.

The following equation can be used to calculate the softstart capacitance value for obtaining desired T SS  time.

<!-- formula-not-decoded -->

where,

TSS = ramp duration (ms)

iSS = soft start current (μA)

CSS = C2 value (nF)

## Soft-Start Time Limitation

- TSS Upper Limit: T SS  should be &lt; 30ms to guarantee the device stays within SOA at all times.
- TSS Lower Limit: During startup, output bypass capacitance is charged up by a constant current I = COUT x V IN /T SS , the inrush current during the startup should be small enough (i.e., T SS  should be long enough) to insure proper startup without OCP fault trip and meeting SOA limitations. More detailed information can be found in the MAX16550 data sheet.

## Configuration

The MAX16550 is configured using both analog programming resistors and PMBus. Default EV kit configuration is shown in Table 1.

## Evaluates: MAX16550/ MAX16550A/MAX16550B

## Moderate/Reference OCP Threshold

Moderate (MAX16550) and Reference OCP threshold is on-the-fly  analog  programmable  by  selecting  the  value of  ROCP  resistor  connected  to  ROCP  pin.  This  EV  kit provides option to program the Moderate/Reference OCP threshold on-the-fly by toggling SW1 to choose between 'HIGH' or 'LOW' settings (SW1 pointed towards "L" label selects 'LOW' setting and 'HIGH' if pointed towards "H" label).

## Severe OCP Threshold

Severe  OCP  threshold  is  programmed  using  PMBus Reg\_D0h  bit  [7],  default  value  is  130%  of  Moderate/ Reference OCP (Reg\_D0h[7] = 0).

## Analog Load Current Reporting

The  MAX16550  provides  a  dedicated  pin  (I LOAD )  to report  analog  current  representation  of  a  load  current. Current representation of a load current should be measured across resistor R13. The voltage across R13 can be measured by connecting a voltmeter across J9 (pins 13 and 14). Voltage V REP  [V], as reported by the voltmeter,  represents  the  reported  output  current  that  can  be calculated using the following equation.

<!-- formula-not-decoded -->

where,

VREP = voltage reported on I LOAD  pin (V)

GILOAD = current reporting gain (= 5μA/A)

RILOAD = value of R ILOAD resistor (kΩ)

I OUT = output current value (A)

## Output Enable

The output voltage may be enabled or disabled by using the  EN/UVLO  switch  (SW2). At  restart,  the  MAX16550 performs a pass FET short test, C SS  discharge and resistors check tests.

## Fault Reporting

The  EV  kit  provides  options  to  monitor  FAULTB  and PWRGD  fault  reporting  signals.  PWRGD  and  FAULTB can be monitored on J9 (pins 4 and 6, respectively). In addition,  two  LEDs  (D5  and  D3)  are  loaded  by  default to  indicate  fault  status.  D5  will  illuminate  if  PWRGD  is asserted  high.  D3  will  illuminate  if  FAULTB  is  asserted low. Refer to the MAX16550 data sheet for the tables to interpret fault and status conditions reported by FAULTB and PWRGD pins.

## MAX16550 Evaluation Kit

## Fault Testing and Validation Protection

This EV  kit enables  verification  of  the  MAX16550 protection against fault conditions that could cause system failure. Required board modification for  specific  tests  and  test  guidelines  are  provided  in subsequent chapters.

## Moderate Overcurrent Protection (MAX16550)

Test procedure to verify the moderate overcurrent protection feature is provided below:

- 1) Power up the EV kit: Follow the instructions provided in Getting Started section. Make sure that a load is connected to the output.
- 2) Select Moderate\_OCP threshold = 'HIGH'.
- 3) Apply a load current to achieve Moderate\_OCP threshold &lt; I OUT  &lt; Severe\_OCP threshold (Severe\_ OCP threshold is set to 130% of Moderate\_OCP threshold by default). Keep the load for longer than Moderate OCP timeout. After the timer expiration, the MAX16550 should turn off the pass FET and assert the FAULTB signal low. This is a latching fault that can be removed by cycling the 12V IN  supply, PMBus commands, or EN/UVLO toggling. PWRGD is expected to be asserted low after a fault condition.

To monitor system behavior and the MAX16550 protection response, it is suggested to sense:

- Output voltage
- Load current
- FAULTB
- PWRGD
- Voltage across soft-start capacitor C2

## Moderate Overcurrent Protection-'On-The-Fly' Threshold Validation (MAX16550)

Test procedure to verify the moderate overcurrent protection feature is provided below:

- 1) Power up the EV kit: Follow the instructions provided in Getting Started section. Make sure that a load is connected to the output.
- 2) Select Moderate\_OCP threshold = 'HIGH' (SW1 pointing towards J3).
- 3) Apply a load current: square waveform: 0 - (0.8 * Moderate\_OCP), 1Hz, 50% duty cycle. Verify that the MAX16550 stays in normal operation (no overcurrent fault is detected).
- 4) Toggle SW1 to select Moderate\_OCP threshold 'LOW'. The MAX16550 should turn off the pass FET and assert the FAULTB signal low. This is a latching fault

## Evaluates: MAX16550/ MAX16550A/MAX16550B

that can be removed by cycling the 12V IN  supply, toggling EN/UVLO, or through PMBus commands. PWRGD is expected to be de-asserted low and FAULTB asserted low.

## Severe OCP Protection

Test  procedure  to  verify  the  Circuit  Breaker  protection feature is provided below:

- 1) Power up the EV kit: Follow the instructions provided in Getting Started section. Make sure that a load is connected to the output.
- 2) Apply a load current to achieve output current I OUT &gt; Severe\_OCP threshold (Severe\_OCP threshold is set to 130% of Moderate/Reference OCP threshold by default). The MAX16550 should turn off the pass FET and assert the FAULTB signal low. This is a latching fault that can be removed by cycling the 12VIN  supply, toggling EN/UVLO, or through PMBus commands. PWRGD is expected to be asserted low and FAULTB asserted LOW.

## VOUT to GND Short Fault Protection

The EV kit provides options to test V OUT  to GND short fault protection. The MAX16550 should turn off the pass FET and assert FAULTB signal LOW. This is a latching fault  that  can  be  removed  by  cycling  the  12V IN   supply, cycling EN/UVLO, or through PMBus commands.

- 1) Option 1: Testing V OUT  to GND short during normal operation:
- a. Power-up the EV kit: Follow the instructions provided in Getting Started section.
- b. Toggle SW4 to EN (switch pointing towards J1).

This test could be performed in any operating condition (i.e., any load condition including no load and full load).

- 2) Option 2: Testing the system starting into shorted output:
- a. Get  ready  to  power  up  the  EV  kit:  Follow  the instructions  provided  in Getting  Started section but do not enable the MAX16550 (i.e., keep EN/ UVLO signal de-asserted (do not toggle SW2)).
- b. Before  testing  the  system  starting  into  shorted output,  it  is  required  to  toggle  SW4  into  off position (switch pointing towards the USB connector).
- c. Short output connectors by shorting top and bottom sides of output edge connector (J1).
- d.  Complete the MAX16550 turn on by toggling EN/ UVLO switch to EN.

## MAX16550 Evaluation Kit

## Overtemperature Fault Protection

Test  procedure  to  verify  overtemperature  protection  is provided below:

- 1) Power up the EV kit: Follow the instructions provided in Getting Started section.
- 2) Increase the device temperature beyond overtemperature protection threshold (135°C). Note: Maxim recommends placement of a thermocouple on the IC to monitor IC temperature. The thermocouple should be placed on the bottom-side of the IC and above the FET section as it allows more precise temperature monitoring. A heat gun, in addition to soldering heater, placed under the EV kit could be used. To improve temperature reporting it is recommended not to aim the heat gun directly at the IC: thermocouple will report temperature higher than actual IC temperature.

## MAX16550 Faults Protection

## 1) CSS Discharge Fail Fault

The MAX16550 performs CSS discharge test at restart to insure correct and repeatable soft start.

- a. Power  up  the  EV  kit:  Follow  the  instructions provided in Getting Started section.
- b.  Connect 1V power supply to J13\_2 header.
- c. Disable the MAX16550 by de-asserting EN/UVLO signal  low  (toggle  the  SW2),  forcing  the  system to shutdown, and then re-enable the MAX16550 by  asserting  EN/UVLO  signal  HIGH  (toggle  the SW2).

As a response to CSS discharge fail fault, the MAX16550 will not turn the pass FET on and will report the fault by asserting the FAULTB signal low. This is a latching fault state. The PWRGD signal remains asserted low.

To restart the part, de-assert the EN/UVLO low (toggle the SW2), open J13, cycle the 12V power supply, and assert EN/UVLO high (toggle SW2).

- 2) VIN  to V OUT  Short Detection and Protection The MAX16550 performs V IN  to V OUT  short test at restart to avoid startup in severe failure condition. If the MAX16550 detects the V IN  to V OUT  short during startup, it will report it by asserting both FAULTB and PWRGD signals low. This is a latching fault.
- a. Power  up  the  EV  kit:  Follow  the  instructions provided in the Getting Started section.
- b. Short  the  MAX16550  input  and  output  pins  by shorting J14 (placing jumper).
- c. Toggle EN/UVLO to low and then again to high, forcing the MAX16550 to shut down and restart with V IN  to V OUT  short fault condition present.

## Evaluates: MAX16550/ MAX16550A/MAX16550B

The MAX16550 will not start and assert FAULTB pin low, PWRGD signal will stay deasserted low.

## 3) Wrong ROCP Fault

Programming resistor (ROCP) for moderate OCP threshold is monitored at all times, including startup. If R OCP  value is detected to be outside the range specified in the MAX16550 data sheet, the MAX16550 will turn off the pass FET and will report a fault by asserting the FAULTB signal low. This is a latching fault that can be removed by cycling the 12VIN  supply, toggling EN/UVLO, or through PMBus command.

Board modification is required to perform this test:

Option 1: Wrong ROCP fault response testing during normal operation:

- a.  Mount R10 = 0W.
- b.  Select OCP\_M threshold = 'LOW' (SW1 pointing towards to L).
- c. Power  up  the  EV  kit:  Follow  the  instructions provided in Getting Started section.
- d.  Select OCP\_M threshold = 'HIGH': IC will latch the FET off and it will report FAULTB low.

Option 2: Wrong ROCP fault response testing during startup:

- a.  Mount R10 = 0W.
- b.  Select OCP\_M threshold = 'HIGH.'
- c. Power  up  the  EV  kit:  Follow  the  instructions provided in Getting Started section.
- d. IC will not start and it will report FAULTB low.

## 4) MOSFET VGS UVLO Fault

The MAX16550 performs pass FET V GS  UVLO test at restart to avoid startup in fault condition. If the pass FET V GS  does not exceed its UVLO thresholds within 110ms (max) after startup is initiated, the MAX16550 will not turn the pass FET on and will report a fault by asserting the FAULTB signal low (latching fault). The following board modifications are required to perform this test:

- a. Preparing  the  EV  kit  for  power-up:  Follow  the instructions provided in the Getting Started section, but do not enable the MAX16550 , (i.e., keep EN/ UVLO signal de-asserted-do not toggle SW2).
- b.  Short MAX16550 SS pin to GND (use J13).
- c. Complete the MAX16550 turn-on by toggling EN/ UVLO switch SW2.

- d.  MAX16550 should report FAULTB 110ms (max) after  enabling  (FAULTB  asserted  low).  PWRGD remains de-asserted low.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16550EVKIT# | EV Kit |

#Denotes RoHS compliant.

## Special Notes

- 1) If a fast load transient resulting in fast and large transient output voltage deviation is possible in the application, an additional capacitor (100nF) between the SS pin and 12V V OUT  is recommended to keep pass FET V GS  above its UVLO threshold during the transients (C47 not stuffed by default).
- 2) Circuitry provided on the EV kit is designed to be used for testing protection against V OUT  short to GND during normal operation only. This circuitry is not to be used for V OUT  to GND short test during startup. Use edge connector J1 to perform start into short circuit tests (it can be also used for V OUT  short to GND during normal operation).

## MAX16550 Evaluation Kit

## MAX16550 EV Kit Bill of Materials

|   QTY | REF DES                          | MFG PART #                                                                         | MANUFACTURER                             | VALUE           | DESCRIPTION                                        |
|-------|----------------------------------|------------------------------------------------------------------------------------|------------------------------------------|-----------------|----------------------------------------------------|
|     6 | BST, SMB_CLK SS,SMB_DAT VIN,VOUT | 5000                                                                               | KEYSTONE                                 | N/A             | TEST POINT; RED; DIA=0.1IN; LENGTH=0.3IN           |
|     1 | C1                               | C1005X6S1E224K050BC                                                                | TDK                                      | 0.22UF          | CAP; SMT (0402); 0.22UF; 10%; 25V; X6S; CERAMIC    |
|     1 | C2                               | C1005X7R1E473K050BC GRM155R71E473K GCM155R71E473KA55                               | TDK MURATA MURATA                        | 0.047UF         | CAP; SMT (0402); 0.047UF; 10%; 25V; X7R; CERAMIC   |
|     1 | C3                               | C0402C103K5RAC GRM155R71H103KA88 C1005X7R1H103K050BE CL05B103KB5NNN UMK105B7103KV  | KEMET MURATA TDK SAMSUNG TAIYO YUDEN     | 0.01UF          | CAP; SMT (0402); 0.01UF; 10%; 50V; X7R; CERAMIC    |
|     2 | C4, C5                           | 16SEP330M                                                                          | PANASONIC                                | 330UF           | CAP; THRU HOLE-RADIAL LEAD; 330UF; 20%; 16V        |
|     1 | C16                              | EMK212BJ106KG                                                                      | TAIYO YUDEN                              | 10UF            | CAP; SMT (0805); 10UF; 10%; 16V; X5R; CERAMIC      |
|     1 | C18                              | 08053C225KAT2A TMK212B7225KG GRM21BR71E225KA73 GRT21BR71E225KE13 GRM21BR71E225KE11 | AVX TAIYO YUDEN MURATA MURATA MURATA     | 2.2UF           | CAP; SMT (0805); 2.2UF; 10%; 25V; X7R; CERAMIC     |
|     4 | C19, C28, C29, C33               | C1005X7R1C104K050BC 0402YC104KAT2A CL05B104KO5NNNC GRM155R71C104KA88 EMK105B7104KV | TDK AVK SAMSUNG MURATA TAIYO YUDEN       | 0.1UF           | CAP; SMT (0402); 0.1UF; 10%; 16V; X7R; CERAMIC     |
|     1 | C25                              | GRM32ER71E226KE15 CL32B226KAJNFN CL32B226KAJNNW TMK325B7226KM C1210C226K3RAC7210   | MURATA SAMSUNG SAMSUNG TAIYO YUDEN KEMET | 22UF            | CAP; SMT (1210); 22UF; 10%; 25V; X7R; CERAMIC      |
|     3 | C26, C27, C41                    | C0603Y5V160-105ZN                                                                  | VENKEL                                   | 1UF             | CAP; SMT (0603); 1UF; +80%/-20%; 16V; Y5V; CERAMIC |
|     1 | C34                              | UMK107BJ105KA C1608X5R1H105K080AB CL10A105KB8NNN GRM188R61H105KAAL                 | TAIYO YUDEN TDK SAMSUNG MURATA           | 1UF             | CAP; SMT (0603); 1UF; 10%; 50V; X5R; CERAMIC       |
|     1 | C45                              | CC0402KRX7R9BB102 C1005X7R1H102K050BA                                              | YAGEO TDK                                | 1000PF          | CAP; SMT (0402); 1000PF; 10%; 50V; X7R; CERAMIC    |
|     1 | C46                              | C1005X5R1A104K050BA LMK105BJ104KV                                                  | TDK TAIYO YUDEN                          | 0.1UF           | CAP; SMT (0402); 0.1UF; 10%; 10V; X5R; CERAMIC     |
|     1 | D1                               | 20BQ030                                                                            | INT. RECTIFIER                           | 20BQ030         | DIODE; SCH; SMB (DO-214AA); PIV=30V; IF=2A         |
|     1 | D2                               | SMBJ20A                                                                            | BOURNS INC                               | 20V             | DIODE; TVS; SMB (DO-214AA); VRM=20V; IPP=18.6A     |
|     1 | D3                               | HSMH-C650                                                                          | AVAGO TECH                               | HSMH-C650       | DIODE; LED; RED; SMT (1206); PIV=1.8V; IF=0.025A   |
|     1 | D4                               | CMD15-21VYC/TR8                                                                    | CHICAGO MINIA                            | CMD15-21VYC/TR8 | DIODE; LED; YELLOW; SMT (1206); PIV=2.0V; IF=0.02A |
|     1 | D5                               | HSMG-C650                                                                          | AVAGO TECHN                              | HSMG-C650       | DIODE; LED; GREEN; SMT (1206); PIV=2.2V; IF=0.025A |
|     2 | J2, J16                          | BP30R                                                                              | SUPERIOR ELECTRIC                        | BP30R           | CONNECTOR; FEMALE; RED; STRAIGHT; 1PIN             |
|     2 | J3, J17                          | BP30B                                                                              | SUPERIOR ELECTRIC                        | BP30B           | CONNECTOR; FEMALE; BLACK; STRAIGHT; 1PIN           |
|     1 | J4                               | ED120/2DS                                                                          | ON-SHORE TECH.                           | ED120/2DS       | CONNECTOR; FEMALE; THRU HOLE; BLUE; 2PINS          |
|     1 | J9                               | TSW-107-07-L-D                                                                     | SAMTEC                                   | TSW-107-07-L-D  | CONNECTOR; MALE; THRU HOLE; 14PINS                 |

## Evaluates: MAX16550/ MAX16550A/MAX16550B

## MAX16550 EV Kit Bill of Materials (continued)

|   QTY | REF DES                | MFG PART #                  | MANUFACTURER          | VALUE          | DESCRIPTION                                             |
|-------|------------------------|-----------------------------|-----------------------|----------------|---------------------------------------------------------|
|     7 | J10-J13, J15, J20, J22 | TSW-101-07-L-D              | SAMTEC                | TSW-101-07-L-D | CONNECTOR; MALE; THRU HOLE; 2 ROW; 2PINS                |
|     1 | J14                    | TSW-102-07-L-D              | SAMTEC                | TSW-102-07-L-D | CONNECTOR; MALE; THRU HOLE; STRAIGHT; 4PINS             |
|     1 | J18                    | AWHW16G-0202-T              | ASSMANN               | AWHW16G-0202-T | CONNECTOR; MALE; THRU HOLE; STRAIGHT; 16PINS            |
|     1 | J19                    | TSW-103-07-L-S              | SAMTEC                | TSW-103-07-L-S | CONNECTOR; THRU HOLE; 1 ROW; STRAIGHT; 3PINS            |
|     4 | SPACER1-3              | 9032                        | KEYSTONE              | 9032           | SPACER; ROUND-THRU HOLE; M3.5; 5/8IN; NYLON             |
|     1 | Q1                     | BSS138                      | ON SEMICOND           | BSS138         | TRANSISTOR; NCH; SOT-23; PD-(0.36W); I-(0.22A); V-(50V) |
|     3 | Q4-Q6                  | FDS6699S                    | FAIRCHILD             | FDS6699S       | TRANSISTOR; NCH; 30V; SO-8; PD-(2.5W); I-(21A); V-(30V) |
|     1 | R9                     | ERJ-2RKF1583                | PANASONIC             | 158K           | RES; SMT (0402); 158K; 1%; +/-100PPM/DEGC; 0.1000W      |
|     1 | R10                    | ERJ-2RKF2373                | PANASONIC             | 237K           | RES; SMT (0402); 237K; 1%; +/-100PPM/DEGC; 0.1000W      |
|     1 | R13                    | ERJ-2RKF8661                | PANASONIC             | 8.66K          | RES; SMT (0402); 8.66K; 1%; +/-100PPM/DEGC; 0.1000W     |
|     1 | R14                    | CRCW08051K02FK              | VISHAY DALE           | 1.02K          | RES; SMT (0805); 1.02K; 1%; +/-100PPM/DEGC; 0.1250W     |
|     1 | R15                    | CRCW040220K0FK              | VISHAY DALE           | 20K            | RES; SMT (0402); 20K; 1%; +/-100PPM/DEGC; 0.0630W       |
|     1 | R16                    | ERJ-2RKF2261                | PANASONIC             | 2.26K          | RES; SMT (0402); 2.26K; 1%; +/-100PPM/DEGC; 0.1000W     |
|     5 | R19, R20 R24-R26       | ERJ-2RKF1002                | PANASONIC             | 10K            | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.1000W       |
|     1 | R23                    | ERJ-2RKF1781                | PANASONIC             | 1.78K          | RES; SMT (0402); 1.78K; 1%; +/-100PPM/DEGC; 0.1000W     |
|     2 | R30, R31               | ERJ-8GEY0R00                | TE CONNECTIVITY       | 0              | RES; SMT (1206); 0; JUMPER; JUMPER; 0.2500W             |
|     2 | R32, R33               | CRCW0603280RFK ERJ-3EKF2800 | VISHAY DALE PANASONIC | 280            | RES; SMT (0603); 280; 1%; +/-100PPM/DEGC; 0.1000W       |
|     1 | R34                    | CRCW060310K0JN ERJ-3GEYJ103 | VISHAY PANASONIC      | 10K            | RES; SMT (0603); 10K; 5%; +/-200PPM/DEGK; 0.1000W       |
|     2 | R35, R36               | CRCW0603100RFK ERJ-3EKF1000 | VISHAY PANASONIC      | 100            | RES; SMT (0603); 100; 1%; +/-100PPM/DEGK; 0.1000W       |
|     3 | R44-R46                | ERJ-2GE0R00                 | PANASONIC             | 0              | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W             |
|     3 | SW1, SW2, SW4          | GT21MCBE                    | C&K COMPONENT         | GT21MCBE       | SWITCH; DPDT; THROUGH HOLE; 20V; 0.4VA                  |
|     2 | GND, TP1               | 5011                        | KEYSTONE              | N/A            | TESTPOINT;BLACK; DIA=0.125IN;LENGTH=0.445IN             |
|     1 | U1                     | MAX16550GPN+                | ANALOG                | MAX16550GPN+   | IC; PROT; INTEGRATED 30A PROTECTION IC ON 12V           |
|     1 | U2                     | TS3480CX33 RFG              | TAIWAN SEMI           | TS3480CX33 RFG | IC; VOLT REGULATOR; SOT23; 10 WEEKS LEAD TIME           |
|     1 | U5                     | MIC4422YM                   | MICREL                | MIC4422YM      | IC; MOSFET DRIVER; 9A; NSOIC8 ; 52 WEEKS LEAD TIME      |
|     1 | PCB                    | MAX16550                    | ANALOG                | PCB            | PCB:MAX16550                                            |

## MAX16550 Evaluation Kit

## MAX16550 EV Kit PCB Schematics

<!-- image -->

## MAX16550 EV Kit PCB Schematics (continued)

<!-- image -->

## MAX16550 Evaluation Kit

## MAX16550 EV Kit PCB Layout Diagrams

MAX16550 EV Kit-Top Silkscreen

<!-- image -->

Evaluates: MAX16550/

MAX16550 EV Kit-Top

<!-- image -->

│

## MAX16550 Evaluation Kit

## MAX16550 EV Kit PCB Layout Diagrams (continued)

MAX16550 EV Kit-Layer2

<!-- image -->

MAX16550 EV Kit-Layer3

<!-- image -->

Evaluates: MAX16550/

│

## MAX16550 Evaluation Kit

## MAX16550 EV Kit PCB Layout Diagrams (continued)

MAX16550 EV Kit-Layer4

<!-- image -->

MAX16550 EV Kit-Layer5

<!-- image -->

## Evaluates: MAX16550/

│

## MAX16550 Evaluation Kit

## MAX16550 EV Kit PCB Layout Diagrams (continued)

MAX16550 EV Kit-Bottom

<!-- image -->

MAX16550 EV Kit-Silk Bottom

<!-- image -->

Evaluates: MAX16550/

│

## MAX16550 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                            | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 4/19            | Initial release                                                                                        | -               |
|                 1 | 7/20            | Updated title; general cleanup and clarification                                                       | All             |
|                 2 | 8/20            | Removed MAX16551                                                                                       | All             |
|                 3 | 7/23            | Added board photos; updated PMBus Communication section, Bill of Materials, PCB Layouts, and Schematic | 4, 8-11         |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX16550/

MAX16550A/MAX16550B