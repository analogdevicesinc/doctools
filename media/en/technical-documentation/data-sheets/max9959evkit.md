<!-- lastmod 2022-08-03 -->
<!-- image -->

Evaluates: MAX9959

## General Description

The MAX9959 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB)

design  that  evaluates  the  functionality  of  device  power supply (DPS) IC MAX9959, which has 25V span output voltage and programmable current ranges up to 800mA.

The  MAX9959  EV  kit  contains  a  microcontroller  (MCU) that  translates  between  the  SPI  interface  and  USB  to allow the user to configure internal registers and modes with graphical user interface (GUI) software running on a PC. The EV kit includes Windows® 10-compatible software that provides a simple GUI for configuration of all the  MAX9959 registers  through  SPI. The  EV  kit  is  fully assembled and tested at the factory.

This  document  provides  a  list  of  equipment  required  to evaluate  the  device,  a  straightforward  test  procedure to  verify  functionality,  a  description  of  the  EV  kit  circuit, component  list,  circuit  schematic,  and  artwork  for  each layer of the PCB. The MAX9959 EV kit PCB comes with a MAX9959DCCQ+ installed.

## Benefits and Features

- Easy Evaluation of the MAX9959 EV kit
- On-Board Voltage Reference (MAX6126)
- On-Board DACs for Level Setting
- On-Board ADC for Measurements
- On-Board Regulators Generate All the Required Voltages from ±12V
- USB Interface
- Headers for External SPI and DACs
- Proven PCB Layout
- Includes Heatsink and Fan
- Fully Assembled and Tested

©

## MAX9959 Evaluation Kit

## Quick Start

## Required Equipment

This  section  lists  the  recommended  test  equipment  to verify operation of the MAX9959. It is intended as a guide only and substitutions are possible.

- MAX9959 EV kit
- Windows PC (Windows 10) with one USB2.0 port
- Triple Output DC power supply
- +12V/1.5A
- -12V/1.5A
- +5V/500mA
- Digital voltmeter and ammeter

## Software and Drivers

The MAX9959 EV kit is used in conjunction with the ARM Cortex-M4F microcontroller  MAX32625PICO Application Platform or 'PICO' board to provide power and control the device through a software application or GUI.

## Install the MAX9959 EV Kit GUI Software

This  process  should  take  less  than  10  minutes  after downloading the software package.

- Download the MAX9959 EV kit software from the Maxim Integrated website, run the installation file, and install it
- Start running the GUI program

Ordering Information appears at end of data sheet.

## MAX9959 Evaluation Kit

## Procedure

This  section  provides  a  step-by-step  guide  to  operating the EV kit and testing the device functions.

Caution: Do not turn on the DC power until all con -nections  are  completed.  Connect  all  power-supply grounds to a single ground terminal.

- 1) Place the MAX9959 EV kit on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
- 2) Set all jumpers in their default position as mentioned in Table 1.
- 3) Connect the USB cable from PC to EV kit.
- 4) Apply +12V to VCC, -12V to VEE, and +5V to VDD.
- 5) Start the MAX9959 EV kit software by opening its icon in the Start | Programs menu. The EV kit software main window should appear, as shown in Figure 1.
- 6) In the MAX9959 Settings group box, click on the FV radio button in the Measurement Mode group box and click the Write button.
- 7) In the DAC Settings group box, change the voltage for VIN to +1V and click the Write button.
- 8) Check that the output voltage at DUT\_NODE is close to +1V. Figure 1 shows the MAX9959 EV kit quick start settings.

Evaluates: MAX95

## Detailed Description

## Detailed Description of Software

The main window of the evaluation kit software is shown in Figure 1.

The MAX9959 GUI is organized into four group boxes for all level setting registers and control signal settings, along with the File menu to save and load all these settings.

## MAX9959 Settings

The MAX9959 can be quickly configured through control register settings. An 18-bit word programs the MAX9959.

The Measurement  Mode group  box  is  a  quick  way  to set the MAX9959 to force voltage (FV), force current (FI), force current as a slave device (FI Slave), or place into high  impedance  (Hi-Z).    Bit  settings  are  automatically changed to match the mode settings as follows:

- In Hi-Z mode , all the bits in control register are unchecked.
- In FI Slave mode, FMODE bit is checked and all other bits are unchecked.
- In FV mode , HIZFRCB bit is checked and all other bits are unchecked.
- In FI mode , both HIZFRCB and FMODE bits are checked and all other bits are unchecked.

The Measurement Mode group  box  provides  the  measured  voltages  at  IMEAS  and  VMEAS  pins  of  the MAX9959. Table 1 shows the settings and functionality of these bits in the GUI:

## Table 1. Settings and Functions of the GUI Bits

| SETTING           | FUNCTION                                                                                                                    |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------|
| VGAGain           | This horizontal scrollbar controls the gain and polarity of the variable gain amplifiers (VGA).                             |
| Range             | This horizontal scrollbar controls the full-scale current range for either FI (force current) or MI (measure current) mode. |
| FMODE             | This checkbox selects DPS mode (FV, FI, FI slave, and Hi-Z).                                                                |
| CLEN              | This checkbox enables or disables the voltage and current clamps.                                                           |
| HIZFRCB           | This checkbox along with FMODE selects DPS mode (FV, FI, FI slave, and Hi-Z).                                               |
| HIZMSB            | This checkbox controls the measure output's high-impedance state.                                                           |
| HIZCMPB           | This checkbox controls the comparator output's high-impedance state.                                                        |
| LCOMP1 and LCOMP0 | These checkboxes enable or disable compensation capacitors.                                                                 |
| BCOMP1 and BCOMP0 | These checkboxes enable or disable bypass capacitors.                                                                       |

│

## MAX9959 Evaluation Kit

Evaluates: MAX95

Figure 1. MAX9959 EV Kit Quick Start Settings

<!-- image -->

## MAX9959 Signals and Data Flow Control

HIZMPB and IDDQSEL are signals that can be used to control  the  functionality  of  the  MAX9959.  The  HIZMPB signal is shared in functionality with the HIZMSB bit, and internally both bits are ANDed. It is used either to enable the  measurement  output  or  to  put  the  measurement output  in  the  high-impedance  state.  While  in  FV  mode asserting digital input, IDDQSEL switches the DPS to the minimum current range (range D) and enables the IDDQ test mode.

Data  flow  control  bits  specify  how  data  transfers  from the  shift  registers  to  the  input  and  DPS  register  of  the MAX9959.  Refer  to Serial  Interface  Data  Flow  Control Bits section in the MAX9959 data sheet for more details. Table  2  shows  the  options  available  for  controlling  the data flow.

│

## Table 2. Data Flow Control Settings

|   SETTING | DESCRIPTION                                                 |
|-----------|-------------------------------------------------------------|
|        00 | Input and DPS registers remain unchanged                    |
|        01 | DPS registers get loaded from input register                |
|        10 | Input registers get loaded from shift register              |
|        11 | Both DPS and input registers get loaded from shift register |

## DAC Settings

The MAX5322 is a two channel DAC, and four of them are used to provide seven input voltages for the MAX9959 device.  The  output  voltages  are  set  by  entering  values in  the  corresponding  edit  boxes  and  pressing Enter on the keyboard or clicking the Write button in this specific group box. The edit boxes accept the value of the voltage. Changes in the DC Level edit  boxes automatically change the hexadecimal values in the DAC Setting edit boxes and vice versa. Analog voltages (VIN, IOSI, IOSV, CLH, CLL, ITHHI, and ITHLO) are set by the MAX5322 and appear as the input levels for the MAX9959.

## AutoWrite

The AutoWrite checkboxes can be checked to have the software  automatically  perform  write  operations.  This feature allows the user to change settings and have them updated  without  clicking  the WRITE buttons.  There  is an AutoWrite checkbox for writing to the MAX9959 and DACs. Each device can independently perform autowriting. AutoWrite is disabled by default.

## Menu Options

The Save Configuration option in the File menu saves the current configuration in the MAX9959 EV kit software and  the Load  Configuration option  in  the File menu loads the saved configuration in the MAX9959 EV kit software. The Save Log option in the File menu saves the data log in the console of the MAX9959 EV kit software.

The Select Port in  the Options menu enables the user to connect to the desired COM port. The Reset Settings in the Options menu resets all the current settings in the MAX9959 EV kit software.

## Detailed Description of Hardware

The MAX9959 EV kit is a fully assembled and tested circuit board for evaluating the MAX9959 device power supply. The MAX5322 DAC provides the analog voltages to the MAX9959 DPS. The MAX32625PICO microcontroller controls  SPI  data  transfer  to  both  MAX9959  DPS  and MAX5322 DACs. The various test points are available for different signals and LEDs to indicate status information. The EV kit uses banana plugs for the outputs and inputs because  of  their  high-current  capability.    A  fan  header is  provided to power up the fan and cool the MAX9959 DPS.  Operating  without  the  fan  does  not  damage  the MAX9959 DPS even at high current because it has a thermal shutdown feature that turns off the IC when the die temperature exceeds the thermal limit. The thermal limit is  reached quickly without airflow from the fan. Figure 2 shows the block diagram of the MAX9959 EV kit.

Figure 2. MAX9959 EV Kit Block Diagram

<!-- image -->

│

## MAX9959 Evaluation Kit

## Power Supplies

Connect the power supplies using the high-current banana jacks, VEE (-12V), VCC (+12V) and VDD (+5V). The GND banana jack should be common for all the power supplies on  the  MAX9959  EV  kit.  All  power  supplies  should  be within the range specified in the MAX9959 IC data sheet.

## Table 3. Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                           |
|----------|------------------|-------------------------------------------------------------------------------------------------------|
| J1       | Open*            | Connects SENSE to DUT_NODE                                                                            |
| J2       | Open*            | Connects DUTGSNS to GND                                                                               |
| J3       | Open* 4          | Connects VTHR to GND                                                                                  |
| J4       | Open*            | Provides various signals (AMPOUT, IPAR, VINS, EXTSEL, and VTHR) on the header for external connection |
| J5       | 1-2*             | Turns on the fan on heatsink                                                                          |
| JU12     | 2-3              | Turns off the fan on heatsink                                                                         |
| J6       | Open*            | Connects to 5V supply of fan                                                                          |
| J7       | 1-2*             | Connects VCC from power jack to VCC of the MAX9959                                                    |
| J8       | 1-2*             | Connects VEE from power jack to VEE of the MAX9959                                                    |
| J9       | 1-2*             | Connects VDD from power jack to VDD of the MAX9959                                                    |
| J11      | Open*            | MAX32625PICO signals (TEMP, ILIMLO, ILIMHI, and HITEMP)                                               |
| J12      | Closed*          | MAX32625PICO SPI signals (LOADB, SCLK, DIN, DOUT, SS_MAX9959, SS_ADC, SS_ DAC3, and SS_DAC1)          |
| J13      | Closed*          | MAX9959 SPI signals (LOADB, SCLK, DIN, DOUT, SS_MAX9959)                                              |
| J14      | Closed*          | MAX9959 DAC signals                                                                                   |
| J15      | Closed*          | MAX5322 DAC signals                                                                                   |

* Indicates default jumper state.

## Evaluates: MAX95

The  MAX9959  EV  kit  needs  only  three  supplies  to  be connected to the board; all other supplies are generated through regulators on the EV kit board.

## Jumper Settings

Table  3  shows  the  jumper  header,  shunt  position,  and description.

## MAX9959 Evaluation Kit

## Table 4. Test Points

| JUMPER                                 | DESCRIPTION                                                                                                              |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| VCC                                    | Power Input: Apply positive voltage from DC power supply in range of +12V to +18V                                        |
| VEE                                    | Power Input: Apply negative voltage from DC power supply in range of -12V to -15V                                        |
| VDD                                    | Power Input: Apply positive voltage from DC power supply +5V                                                             |
| VDAC1, VDAC2                           | LDO output voltage for DACs                                                                                              |
| VL                                     | LDO output voltage for VL power domain of the MAX9959                                                                    |
| OUT_DAC1, OUT_DAC2, OUT_DAC3, OUT_DAC4 | DAC output voltage                                                                                                       |
| RA, RB, RC, RD                         | Test point to measure the voltage across sense resistors connected to the MAX9959 for different current ranges           |
| DUT_NODE                               | Range A/B/C/D output to which load resistor gets connected                                                               |
| VTHR                                   | Threshold voltage input. Sets the input logic threshold level of all digital inputs.                                     |
| EXTSEL                                 | External Select Output. Selects the external range.                                                                      |
| HITEMP                                 | Temperature Monitor Output. Temp outputs a voltage proportional to die temperature at 10mV/K.                            |
| ILIMHI, ILIMLO                         | Low-Current and High-Current Limit Output. This output is triggered if the load current is above ILIMHI or below ILIMLO. |
| AMPOUT                                 | Main Amplifier Output. Drives the external buffer when using the external range mode.                                    |

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9959EVKIT# | EV Kit |

# Denotes RoHS complaint

Evaluates: MAX95

## MAX9959 Evaluation Kit

## MAX9959 EV Kit Bill of Materials

|   ITEM | REF_DES                                                | DNI/DNP   |   QTY | MFG PART #                                                                                    | MANUFACTURER                                  | VALUE                                                         | DESCRIPTION                                                                                                             | COMMENTS                                                      |
|--------|--------------------------------------------------------|-----------|-------|-----------------------------------------------------------------------------------------------|-----------------------------------------------|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
|      1 | AMPOUT, EXTSEL, HITMP, TP9-TP13, TP17-TP20, VRXP, VTHR |           |    14 | 5012 KEYSTONE                                                                                 | 5012 KEYSTONE                                 | N/A                                                           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |                                                               |
|      2 | C1-C3, C76                                             |           |     4 | C1210C106K3RAC; GRM32DR71E106K; GCM32ER71E106KA57; CGA6P1X7R1E106K250AC; GCJ32ER71E106KA18    | KEMET;MURATA;MURATA; TDK;MURATA               | 10UF                                                          | CAP; SMT (1210); 10UF; 10%; 25V; X7R; CERAMIC                                                                           |                                                               |
|      3 | C4, C7, C69, C74, C75                                  |           |     5 | TMK107B7105KA; 06033C105KAT2A; C1608X7R1E105K080AE                                            | MURATA;TAIYO YUDEN; AVX;TAIYO YUDEN           | 1UF                                                           | CAP; SMT (0603); 1UF; 10%; 25V; X7R; CERAMIC                                                                            |                                                               |
|      4 | C5, C8                                                 |           |     2 | C0603C102K1GAC; C1608C0G2A102K080AA                                                           | KEMET;TDK                                     | 1000PF                                                        | CAP; SMT (0603); 1000PF; 10%; 100V; C0G; CERAMIC                                                                        |                                                               |
|      5 | C6, C9, C63, C65                                       |           |     4 | C1608X5R1E475K080AC; GRM188R61E475KE11                                                        | TDK;MURATA                                    | 4.7UF                                                         | CAP; SMT (0603); 4.7UF; 10%; 25V; X5R; CERAMIC                                                                          |                                                               |
|      6 | C10, C12-C16, C25-C36                                  |           |    18 | C1608X5R1E106M080AC; CL10A106MA8NRNC; GRM188R61E106MA73; ZRB18AR61E106ME01; GRT188R61E106ME13 | TDK;SAMSUNG ELECTRONICS; MURATA;MURATA;MURATA | 10UF                                                          | CAP; SMT (0603); 10UF; 20%; 25V; X5R; CERAMIC                                                                           |                                                               |
|      7 | C11                                                    |           |     1 | C0603C473K5RAC; GRM188R71H473KA61; GCM188R71H473KA55; CGA3E2X7R1H473K080AA                    | KEMET;MURATA;MURATA;TDK                       | 0.047UF                                                       | CAP; SMT (0603); 0.047UF; 10%; 50V; X7R; CERAMIC                                                                        |                                                               |
|      8 | C17-C24, C37-C48, C64, C66-C68, C70-C73                |           |    28 | 06033C104JAT2A                                                                                | AVX                                           | 0.1UF                                                         | CAP; SMT (0603); 0.1UF; 5%; 25V; X7R; CERAMIC                                                                           |                                                               |
|      9 | C49                                                    |           |     1 | GCM188R71H332KA37                                                                             | MURATA                                        | 3300PF                                                        | CAP; SMT (0603); 3300PF; 10%; 50V; X7R; CERAMIC                                                                         |                                                               |
|     10 | C50                                                    |           |     1 | C0603C223K5RAC; GRM188R71H223K; C1608X7R1H223K080AA;                                          | KEMET;MURATA;TDK;MURATA                       | 0.022UF                                                       | CAP; SMT (0603); 0.022UF; 10%; 50V; X7R; CERAMIC                                                                        |                                                               |
|     11 | C51, C54, C60                                          |           |     3 | GCJ188R71H223KA01 CC0603KRX7R9BB331                                                           | YAGEO                                         | 330PF                                                         | CAP; SMT (0603); 330PF; 10%; 50V; X7R; CERAMIC                                                                          |                                                               |
|     12 | C52, C56                                               |           |     2 | C0603X7R500-472KNE; GRM188R71H472KA01                                                         | VENKEL LTD.;MURATA                            | 4700PF                                                        | CAP; SMT (0603); 4700PF; 10%; 50V; X7R; CERAMIC                                                                         |                                                               |
|     13 | C53                                                    |           |     1 | C0603X7R500103JNP; C0603C103J5RAC                                                             | VENKEL LTD;KEMET                              | 0.01UF                                                        | CAP; SMT (0603); 0.01UF; 5%; 50V; X7R; CERAMIC                                                                          |                                                               |
|     14 | C55, C58                                               |           |     2 | C0603C152K5RAC; C0603X7R500-15                                                                | KEMET;VENKEL LTD                              | 1500PF                                                        | CAP; SMT (0603); 1500PF; 10%; 50V; X7R; CERAMIC                                                                         |                                                               |
|     15 | C57, C59                                               |           |     2 | 06035C101JAT                                                                                  | AVX                                           | 100PF                                                         | CAP; SMT (0603); 100PF; 5%; 50V; X7R; CERAMIC                                                                           |                                                               |
|     16 | C61, C62                                               |           |     2 | C0603C0G500-271JNE; GRM1885C1H271JA01                                                         | VENKEL LTD.;MURATA                            | 270PF                                                         | CAP; SMT (0603); 270PF; 5%; 50V; C0G; CERAMIC                                                                           |                                                               |
|     17 | DS1-DS3                                                |           |     3 | LTST-C190CKT                                                                                  | LITE-ON ELECTRONICS INC.                      | LTST-C190CKT                                                  | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                         | RED                                                           |
|     18 | DS4, DS5, DS6, DS8-DS11                                |           |     7 | LTST-C193KGKT-5A                                                                              | LITE-ON ELECTRONICS INC.                      | LTST-C193KGKT-5A                                              | DIODE; LED; STANDARD; YELLOW-GREEN; SMT (0603); PIV=1.9V; IF=0.005A; -55 DEGC TO +85 DEGC                               | (DS4,DS5:GREEN)                                               |
|     19 | DUT_NODE, TP14                                         |           |     2 | 575-4                                                                                         | KEYSTONE                                      | 575-4                                                         | RECEPTACLE; JACK; BANANA; 0.203IN [5.2MM] DIA X 0.218IN [5.5MM] L; 0.203D/0.218L; NICKEL PLATED BRASS                   |                                                               |
|     20 | FB1-FB6                                                |           |     6 | MPZ1608S221ATA00                                                                              | TDK                                           | 220 INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/-25%; 2.2A | 220 INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/-25%; 2.2A                                                           | 220 INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/-25%; 2.2A |
|     21 | GND, TEMP, VCC, VDD, VEE                               |           |     5 | 9020 BUSS                                                                                     | WEICO WIRE                                    | MAXIMPAD                                                      | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                |                                                               |
|     22 | HITEMP, ILIMHI, ILIMLO, RA, RB, RC, RD                 |           |     7 | 5000                                                                                          | KEYSTONE                                      | N/A                                                           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |                                                               |
|     23 | IMEAS, VMEAS                                           |           |     2 | 5002                                                                                          | KEYSTONE                                      | N/A                                                           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   |                                                               |
|     24 | J1-J3, J6-J9                                           |           |     7 | PCC02SAAN                                                                                     | SULLINS                                       | PCC02SAAN                                                     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                |                                                               |
|     25 | J4                                                     |           |     1 | PBC04DAAN                                                                                     | SULLINS ELECTRONICS CORP.                     | PBC04DAAN                                                     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65 DEGC TO +125 DEGC                                        |                                                               |
|     26 | J5                                                     |           |     1 | PEC03SAAN                                                                                     | SULLINS                                       | PEC03SAAN                                                     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                               |                                                               |
|     27 | J10                                                    |           |     1 | ATS-61400D-C1-R0                                                                              | ADVANCED THERMAL SOLUTIONS INC.               | ATS-61400D-C1-R0                                              | MACHINE FABRICATED; HSINK; 39.25X39.25X9.5MM BGA HEAT SINK ASSEMBLY                                                     |                                                               |
|     28 | J11                                                    |           |     1 | PBC04SAAN                                                                                     | SULLINS ELECTRONICS CORP.                     | PBC04SAAN                                                     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS; -65 DEGC TO +125 DEGC                                        |                                                               |
|     29 | J12                                                    |           |     1 | PBC08SAAN                                                                                     | SULLINS ELECTRONICS CORP.                     | PBC08SAAN                                                     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65 DEGC TO +125 DEGC                                        |                                                               |
|     30 | J13                                                    |           |     1 | PBC05SAAN                                                                                     | SULLINS ELECTRONICS CORP.                     | PBC05SAAN                                                     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC                                        |                                                               |

Evaluates: MAX95

## MAX9959 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                     | QTY              | MFG PART #                                                    | MANUFACTURER                      | VALUE          | DESCRIPTION                                                                                                            | COMMENTS   |
|--------|---------------------------------------------|------------------|---------------------------------------------------------------|-----------------------------------|----------------|------------------------------------------------------------------------------------------------------------------------|------------|
|     31 | J14, J15                                    | 2                | PEC07SAAN                                                     | SULLINS ELECTRONICS CORP.         | PEC07SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 7PINS; -65 DEGC TO +125 DEGC                                       |            |
|     32 | MH1-MH8                                     | 8                | 9032 KEYSTONE                                                 | 9032 KEYSTONE                     | 9032           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                              |            |
|     33 | R4, R7                                      | 2                | ERJ-3GEYJ394                                                  | PANASONIC                         | 390K           | RES; SMT (0603); 390K; 5%; +/-200PPM/DEGC; 0.1000W                                                                     |            |
|     34 | R5, R8                                      | 2                | PNM0603E5002BS                                                | VISHAY DALE                       | 50K            | RES; SMT (0603); 50K; 0.10%; +/-25PPM/DEGC; 0.1500W                                                                    |            |
|     35 | R6, R9, R36, R40                            | 4                | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0 | VISHAY DALE;PANASONIC; YAGEO      | 10K            | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                      |            |
|     36 | R10-R13, R15, R17                           | 6 CRCW06030000Z0 |                                                               | VISHAY DALE                       |                | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                          |            |
|     37 | R14, R16, R35, R39, R42, R44, R47, R48, R50 | 9 ERJ-3EKF1001;  | CRCW06031K00FK; CR0603AFX-1001ELF                             | VISHAY; PANASONIC;BOURNS          | 1K             | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |            |
|     38 | R18-R25                                     | 8                | CRCW060322K0FK                                                | VISHAY DALE                       | 22K            | RES; SMT (0603); 22K; 1%; +/-100PPM/DEGC; 0.1000W                                                                      |            |
|     39 | R31, R33                                    | 2                | CRCW121010R0FKEAHP; CRGP1210F10R                              | VISHAY DRALORIC; TE CONNECTIVITY  |                | 10 RES; SMT (1210); 10; 1%; +/-100PPM/DEGK; 0.7500W                                                                    |            |
|     40 | R32, R34                                    | 2                | ERJ-8BQF3R3                                                   | PANASONIC                         |                | 3.3 RES; SMT (1206); 3.3; 1%; +/-200PPM/DEGC; 0.5000W                                                                  |            |
|     41 | R37, R38                                    | 2                | CRCW1210100RFK                                                | VISHAY DALE                       |                | 100 RES; SMT (1210); 100; 1%; +/-100PPM/DEGC; 0.5000W                                                                  |            |
|     42 | R41, R43, R45, R46, R49                     | 5                | TNPW060310K0BE; RN731JTTD1002B                                | VISHAY DALE;KOA SPEER ELECTRONICS | 10K            | RES; SMT (0603); 10K; 0.10%; +/-25PPM/DEGK; 0.1000W                                                                    |            |
|     43 | R51                                         | 1                | RCW06033K30FK; RC0603FR-073K3L; RK73H1J3301F                  | VISHAY;YAGEO;VISHAY               | 3.3K           | RES; SMT (0603); 3.3K; 1%; +/-100PPM/DEGC; 0.1000W                                                                     |            |
|     44 | R53, R55                                    | 2                | ERJ-3GEYJ102                                                  | PANASONIC                         | 1K             | RES; SMT (0603); 1K; 5%; +/-200PPM/DEGC; 0.1000W                                                                       |            |
|     45 | R54, R68                                    | 2                | CRCW06032K70FK; ERJ-3EKF2701                                  | VISHAY DALE;PANASONIC             | 2.7K           | RES; SMT (0603); 2.7K; 1%; +/-100PPM/DEGC; 0.1000W                                                                     |            |
|     46 | R56, R57, R60, R61                          | 4 ERJ-3EKF3481   |                                                               | PANASONIC                         | 3.48K          | RES; SMT (0603); 3.48K; 1%; +/-100PPM/DEGC; 0.1000W                                                                    |            |
|     47 | R58, R59, R62, R63                          | 4                | RNCP0603FTD2K00                                               | STACKPOLE ELECTRONICS INC.        | 2K             | RES; SMT (0603); 2K; 1%; +/-100PPM/DEGC; 0.1250W                                                                       |            |
|     48 | SU1-SU21                                    | 21               | NPC02SXON-RC                                                  | SULLINS ELECTRONICS CORP.         | NPC02SXON-RC   | CONNECTOR; FEMALE; MINI SHUNT; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                           |            |
|     49 | TP1-TP4                                     | 4                | 3267 POMONA ELECTRONICS                                       | 3267 POMONA ELECTRONICS           | 3267           | CONNECTOR; MALE; PANELMOUNT; STANDARD UNINSULATED BANANA JACK; STRAIGHT; 1PIN                                          |            |
|     50 | TP5, TP8, TP22, VDAC, VL                    | 5                | 5005                                                          | KEYSTONE                          | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |            |
|     51 | TP6, TP7, TP21                              | 3                | 5006                                                          | KEYSTONE                          | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     52 | U1, U2                                      | 2 MAX16910CATA8+ |                                                               | MAXIM                             | MAX16910CATA8+ | IC; VREG; 0.2A; ULTRA-LOW QUIESCENT CURRENT; LINEAR REGULATOR; TDFN8-EP 3X3                                            |            |
|     53 | U3                                          | 1                | MAX38903AATB+                                                 | MAXIM                             | MAX38903AATB+  | EVKIT PART-IC; PKG. CODE: T1033+1C; PKG. OUTLINE NO.: 21-0137; PACKAGE LAND PATTERN: 90-0003                           |            |
|     54 | U4, U5                                      | 2 MAX6126AASA50+ |                                                               | MAXIM                             | MAX6126AASA50+ | IC; VREF; ULTRA-HIGH PRECISION; ULTRA-LOW NOISE; SERIES VOLTAGE REFERENCE; NSOIC8 150MIL                               |            |
|     55 | U6, U7                                      | 2                | MAX6126B21+                                                   | MAXIM                             | MAX6126B21+    | IC; VREF; ULTRA-HIGH PRECISION; ULTRA-LOW NOISE; SERIES VOLTAGE REFERENCE; UMAX8                                       |            |
|     56 | U8-U11                                      | 4                | MAX5322EAI+                                                   | MAXIM                             | MAX5322EAI+    | IC; DAC; +/-10V, DUAL, 12-BIT, SERIAL, VOLTAGE-OUTPUT DAC; SSOP28                                                      |            |
|     57 | U12                                         | 1 MAX9959DCCQ+   |                                                               | MAXIM                             | MAX9959DCCQ+   | IC; PWRMOD; 25V SPAN; 800 MILLIAMPERE DEVICE POWER SUPPLY (DPS); TQFP100-IDP                                           |            |
|     58 | U13                                         | 1                | MAX32625PICO                                                  | MAXIM                             | MAX32625PICO   | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625 ARM CORTEX-M4F; BOARD; LAMINATED PLASTIC WITH COPPER CLAD;       |            |
|     59 | U14                                         | 1                | MAX44245AUD+                                                  | MAXIM                             | MAX44245AUD+   | IC; OPAMP; 36V; PRECISION; LOW-POWER; 90MICRO- AMPERE; QUAD OP AMPS; TSSOP14                                           |            |
|     60 | U15                                         | 1                | MAX14759ETA+                                                  | MAXIM                             | MAX14759ETA+   | IC; ASW; ABOVE- AND BELOW-THE-RAILS LOW ON- RESISTANCE ANALOG SWITCH; TDFN8-EP                                         |            |
|     61 | U16                                         | 1                | MAX1033BEUP+                                                  | MAXIM                             | MAX1033BEUP+   | IC; ADC; 4-CHANNEL; +/-3 X VREF MULTIRANGE INPUTS; SERIAL 14-BIT ANALOG-TO-DIGITAL CONVERTER; TSSOP20                  |            |
|     62 | PCB                                         | 1 MAX9959        |                                                               | MAXIM                             | PCB            | PCB:MAX9959 -                                                                                                          |            |
|     63 | J10                                         | 1                | MF40200V3-1000U-A99                                           | SUNON                             | N/A            | FAN;PANELMOUNT 40MMX40MMX20MM; 5V                                                                                      |            |
|     64 | MISC1                                       | 1                | 3025010-03                                                    | QUALTEK ELECTRONICS CORP          | 3025010-03     | CONNECTOR; MALE; USB-A_MINI-B; USB 4P(A)/M - USB MINI 5P(B)/M; STRAIGHT; 36IN                                          |            |
|     65 | D1-D3                                       | 0 1N5250B        |                                                               | FAIRCHILD SEMICONDUCTOR           | 20V            | DIODE, ZENER, DO-35, Pd=0.5W, Vz=20V@Iz=6.2mA                                                                          |            |
|     66 |                                             | 0                |                                                               |                                   |                |                                                                                                                        |            |
|        | R1-R3, R26-R30                              |                  | N/A                                                           | N/A                               | OPEN           | PACKAGE OUTLINE 0603 RESISTOR                                                                                          |            |

## MAX9959 EV Kit Schematic

<!-- image -->

## MAX9959 EV Kit Schematic (continued)

<!-- image -->

## MAX9959 EV Kit Schematic (continued)

<!-- image -->

## MAX9959 Evaluation Kit

## MAX9959 EV Kit PCB Layout

MAX9959 EV Kit-Silk Top

<!-- image -->

Evaluates: MAX95

│

## MAX9959 EV Kit PCB Layout (continued)

MAX9959 EV Kit-Top

<!-- image -->

Evaluates: MAX95

│

## MAX9959 EV Kit PCB Layout (continued)

MAX9959 EV Kit-Internal2

<!-- image -->

Evaluates: MAX95

│

## MAX9959 EV Kit PCB Layout (continued)

MAX9959 EV Kit-Internal3

<!-- image -->

Evaluates: MAX95

│

## MAX9959 EV Kit PCB Layout (continued)

MAX9959 EV Kit-Bottom

<!-- image -->

Evaluates: MAX95

│

## MAX9959 EV Kit PCB Layout (continued)

MAX9959 EV Kit-Silk Bottom

<!-- image -->

Evaluates: MAX95

│

## MAX9959 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                               | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------|-----------------|
|                 0 | 9/09            | Initial release                                                                           | -               |
|                 1 | 10/20           | Updated Ordering Information and Component List tables, removed Component Suppliers table | 1, 3            |
|                 2 | 1/22            | Revised entire EV kit data sheet                                                          | 1-17            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX95