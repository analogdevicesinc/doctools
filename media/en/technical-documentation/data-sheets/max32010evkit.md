<!-- lastmod 2022-08-03 -->
## MAX32010 Evaluation Kit

## General Description

The MAX32010  evaluation kit (EV kit) is a fully assembled  and  tested  printed circuit  board  (PCB) design that evaluates the functionality of device power supply (DPS) IC MAX32010, which has 25V span output voltage and programmable current ranges up to 1.2A.

The MAX32010 EV kit contains a microcontroller (MCU) that  translates  between  the  SPI  interface  and  USB  to allow the user to configure internal registers and modes with graphical user interface (GUI) software running on a  PC.  The  EV  kit  includes  Windows ®   10-compatible software that provides a simple GUI for configuration of all the MAX32010 registers through SPI. The EV kit is fully assembled and tested at the factory.

This document provides a list of equipment required to evaluate the device, a straightforward test procedure to verify  functionality,  a  description  of  the  EV  kit  circuit, component list, circuit schematic, and artwork for each layer of the PCB. The MAX32010 EV kit PCB comes with a MAX32010DCCQ+ installed.

## EV Kit Top View

<!-- image -->

<!-- image -->

## Features

Easy Evaluation of the MAX32010 EV kit

- On-Board Voltage Reference (MAX6126)
- On-Board DACs for Level Setting
- On-Board ADC for Measurements
- On-Board  Regulators  Generate  All  the  Required Voltages from ±12V
- USB Interface
- Headers for External SPI and DACs
- Proven PCB Layout
- Includes Heatsink and Fan
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX32010

## Quick Start

## Required Equipment

This section lists the recommended test equipment to verify operation of the MAX32010. It is intended as a guide only and substitutions are possible.

- MAX32010 EV kit
- Windows PC (Windows 10) with one USB2.0 port
- Triple Output DC power supply
- +12V/1.5A
- -12V/1.5A
-  +5V/500mA
- Digital voltmeter and ammeter

## Software and Drivers

The MAX32010 EV kit is used in conjunction with the Arm ®  Cortex ® -M4 processor with FPU MAX32625PICO application platform to control the device through a software application or GUI.

## Install the MAX32010 EV Kit GUI Software

Download the MAX32010 EV kit software from the Maxim Integrated website. See the Appendix section  for  detailed instructions to install the EV kit software.  The installation process takes less than 10 minutes after downloading the software package.

## Procedure

- 1) Place the MAX32010 EV kit on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
- 2) Set all jumpers in their default position as mentioned in Table 1.
- 3) Connect the USB cable from PC to EV kit.
- 4) Apply +12V to VCC, -12V to VEE, and +5V to VDD.
- 5) Start the MAX32010 EV kit software by opening its icon in the Start | Programs menu. The EV kit software main window appears, as shown in Figure 1.
- 6) In the Max32010 Settings group box, click on the FV radio button in the Measurement Mode group box and click Write button.
- 7) In the DAC Settings group box, change the voltage for VIN to +1V and click Write button.
- 8) Check that the output voltage at DUT\_NODE is close to +1V. Figure 1 shows the MAX32010 EV kit quick start settings.

## Detailed Description of Software

The main window of the evaluation kit software is shown in Figure 1.

The MAX32010 GUI is organized into four group boxes for all level setting registers and control signal settings, along with the File menu to save and load all these settings.

Figure 1. MAX32010 EV Kit Quick Start Settings

<!-- image -->

## MAX32010 Evaluation Kit

Evaluates: MAX32010

- 1) MAX32010 Settings: The MAX32010 can be quickly configured through control register settings. An 18-bit word programs the MAX32010.

The Measurement Mode group box is a quick way to set the MAX32010 to force voltage (FV), force current (FI), force current as a slave device (FI Slave), or place into high impedance (Hi-Z).  Bit settings are automatically changed to match the mode settings as follows:

- In Hi-Z mode, all the bits in control register are unchecked.
- In FI Slave mode, FMODE bit is checked and all other bits are unchecked.
- In FV mode, bit is set and all other bits are unchecked.
- In FI mode, both and FMODE bits are set and all other bits are unchecked.

The Measurement Mode group box provides the measured voltages at IMEAS and VMEAS pins of the MAX32010.

Table 1 shows the settings and functionality of these bits in the GUI:

## Table 1. Settings and Functions of the GUI Bits

| SETTING           | FUNCTION                                                                                                                    |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------|
| VGA Gain          | This horizontal scrollbar controls the gain and polarity of the variable gain amplifiers (VGA).                             |
| Range             | This horizontal scrollbar controls the full-scale current range for either FI (force current) or MI (measure current) mode. |
| FMODE             | This checkbox selects DPS mode (FV, FI, FI slave, and high impedance).                                                      |
| CLEN              | This checkbox enables or disables the voltage and current clamps.                                                           |
|                   | This checkbox along with FMODE selects DPS mode (FV, FI, FI slave, and high impedance).                                     |
|                   | This checkbox controls the measure output's high-impedance state.                                                           |
|                   | This checkbox controls the comparator output's high-impedance state.                                                        |
| LCOMP1 and LCOMP0 | These checkboxes enable or disable compensation capacitors.                                                                 |
| BCOMP1 and BCOMP0 | These checkboxes enable or disable bypass capacitors.                                                                       |

- 2) MAX32010 Signals and Data Flow Control: HIZMPB and IDDQSEL are signals that can be used to control the functionality of the MAX32010. The HIZMPB signal is shared in functionality with the HIZMSB bit and internally both bits are ANDed. It is used either to enable the measurement output or to put the measurement output in the highimpedance state. While in FV mode asserting digital input, IDDQSEL switches the DPS to the minimum current range (range D) and enabling the IDDQ test mode.

Data  flow  control  bits  specify  how  data  transfers  from  the  shift  registers  to  the  input  and  DPS  register  of  the MAX32010. Refer to Serial Interface Data Flow Control Bits section in the MAX32010 data sheet for more details. Table 2 shows the options available for controlling the data flow:

## Table 2. Data Flow Control Settings

|   SETTING | DESCRIPTION                                                 |
|-----------|-------------------------------------------------------------|
|        00 | Input and DPS registers remain unchanged                    |
|        01 | DPS registers get loaded from input register                |
|        10 | Input registers get loaded from shift register              |
|        11 | Both DPS and input registers get loaded from shift register |

- 3) DAC Settings: The MAX5322 outputs voltages for the MAX32010 device. The output voltages are set by entering values in the corresponding edit boxes and pressing Enter on the keyboard or clicking the Write button in this specific group box. The edit boxes accept the value of the voltage. Changes in the DC Level edit boxes automatically change the hexadecimal values in the DAC Setting edit boxes and vice versa. Analog voltages (VIN, IOSI, IOSV, CLH, CLL, ITHHI, and ITHLO) are set by the MAX5322 and appear as the input levels for the MAX32010.
- 4) AutoWrite : The AutoWrite checkboxes can be checked to have the software automatically perform write operations. This feature allows the user to change settings and have them updated without pressing the WRITE buttons. There is  an AutoWrite checkbox  for  writing  to  the  MAX32010  and  DACs.  Each  device  can  independently  perform autowriting. AutoWrite is disabled by default.
- 5) Menu Options : The Save Configuration option in the File menu saves the current configuration in the MAX32010 EV kit software and the Load Configuration option in the File menu loads the saved configuration in the MAX32010 EV kit software. The Save Log option in the File menu saves the data log in the console of the MAX3210 EV kit software.

The Select Port in the Options menu enables the user to connect to the desired COM port. The Reset Settings in the Options menu resets all the current settings in the MAX32010 EV kit software.

## Detailed Description of Hardware

The MAX32010 EV kit is a fully assembled and tested circuit board for evaluating the MAX32010 device power supply. The MAX5322 DAC provides the analog voltages to the MAX32010 DPS. The MAX32625PICO microcontroller controls SPI data transfer with both MAX32010 DPS and MAX5322 DACs. The various test points are available for different signals and LEDs to indicate status information. The EV kit uses banana plugs for the outputs and inputs because of their highcurrent capability.  Fan header is provided to power the fan to cool the MAX32010 DPS. Operating without the fan does not damage the MAX32010 DPS even at high current because it has a thermal shutdown feature that turns off the IC when the die temperature exceeds the thermal limit. The thermal limit reaches quickly without airflow from the fan. Below Figure 2 shows the block diagram of the MAX32010 EV kit.

Figure 2. MAX32010 EV Kit Block Diagram

<!-- image -->

## Powering the Board

The MAX32010 EV kit is powered by +12V, -12V, and +5V.  On-board regulators generate DAC supply voltage (+11V) and VL (+3V).  External power supplies are used by default, but changing the jumper position on J7, J8, and J9 allows the user-supplied power. See Table 3 for jumper configurations. User-supplied power is useful when isolating the supply current to individual devices. The USB-to-SPI circuitry is fully powered by USB connections and can be used without banana jack supplies. Power is always present before the software runs.

## On-Board Headers (Interface) and Test Points

Table 3 shows the jumper header, shunt position, and description.

## Table 3. Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                           |
|----------|------------------|-------------------------------------------------------------------------------------------------------|
| J1       | Open*            | Connects SENSE to DUT_NODE                                                                            |
| J2       | Open*            | Connects DUTGSNS to GND                                                                               |
| J3       | Open*            | Connects VTHR to GND                                                                                  |
| J4       | 4 Open*          | Provides various signals (AMPOUT, IPAR, VINS, EXTSEL, and VTHR) on the header for external connection |
| J5       | 1-2*             | Turns on the fan on heatsink                                                                          |
| JU12     | 2-3              | Turns off the fan on heatsink                                                                         |
| J6       | Open*            | Connects to 5V supply of fan                                                                          |
| J7       | 1-2*             | Connects VCC from power jack to VCC of the MAX32010                                                   |
| J7 J8    | 1-2*             | Connects VEE from power jack to VEE of the MAX32010                                                   |
| J9       | 1-2*             | Connects VDD from power jack to VDD of the MAX32010                                                   |
| J11      | Open*            | MAX32625PICO signals (TEMP, ILIMLO, ILIMHI, and HITEMP)                                               |
| J12      | Closed*          | MAX32625PICO SPI signals (LOADB, SCLK, DIN, DOUT, SS_MAX9959, SS_ADC, SS_DAC3, and SS_DAC1)           |
| J13      | Closed*          | MAX32010 SPI signals (LOADB, SCLK, DIN, DOUT, SS_MAX9959)                                             |
| J14      | Closed*          | MAX32010 DAC signals                                                                                  |
| J15      | Closed*          | MAX5322 DAC signals                                                                                   |

## Table 4. Test Points

| JUMPER                                 | DESCRIPTION                                                                                                      |
|----------------------------------------|------------------------------------------------------------------------------------------------------------------|
| VCC                                    | Power Input: Apply positive voltage from DC power supply in range of +12V to +18V                                |
| VEE                                    | Power Input: Apply negative voltage from DC power supply in range of -12V to -15V                                |
| VDD                                    | Power Input: Apply positive voltage from DC power supply +5V                                                     |
| VDAC1, VDAC2                           | LDO output voltage for DACs                                                                                      |
| VL                                     | LDO output voltage for VL power domain of the MAX32010                                                           |
| OUT_DAC1, OUT_DAC2, OUT_DAC3, OUT_DAC4 | DAC output voltage                                                                                               |
| RA, RB, RC, RD                         | Test point to measure the voltage across sense resistors, connected to the MAX32010 for different current ranges |
| DUT_NODE                               | Range A/B/C/D output, to which load resistor gets connected                                                      |
| VTHR                                   | Threshold voltage input. Sets the input logic threshold level of all digital inputs                              |
| EXTSEL                                 | External Select Output. Selects the external range                                                               |

| HITEMP         | Temperature Monitor Output. Temp outputs a voltage proportional to die temperature 10mV/K                               |
|----------------|-------------------------------------------------------------------------------------------------------------------------|
| ILIMHI, ILIMLO | Low-Current and High-Current Limit Output. This output is triggered if the load current is above ILIMHI or below ILIMLO |
| AMPOUT         | Main Amplifier Output. Drives the external buffer when in external range mode                                           |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX32010EVKIT# | EV Kit |

#Denotes RoHS compliance .

## MAX32010 EV Kit Bill of Materials

|   ITEM | REF_DES                                                  | DNI/D NP   |   QTY | MFG PART #                                                                                                                             | MANUFACTURER                                        | VALUE   | DESCRIPTION                                                                                                             | COMMENTS   |
|--------|----------------------------------------------------------|------------|-------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | AMPOUT, EXTSEL, HITMP, TP9- TP13, TP17- TP20, VRXP, VTHR | -          |    14 | 5012                                                                                                                                   | KEYSTONE                                            | N/A     | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|      2 | C1-C3, C76                                               | -          |     4 | C1210C106 K3RAC;GR M32DR71E1 06K;GCM32 ER71E106K A57;CGA6P 1X7R1E106 K250AC;GC J32ER71E1 06KA18                                        | KEMET;MURATA; MURATA;TDK;MU RATA                    | 10UF    | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                       |            |
|      3 | C4, C7, C69, C74, C75                                    | -          |     5 | GRM188R71 E105KA12;C GA3E1X7R1 E105K;TMK 107B7105K A;06033C10 5KAT2A;GC M188R71E1 05KA64;C16 08X7R1E10 5K080AE;C GA3E1X7R1 E105K080A C | MURATA;TDK;TAIY O YUDEN;AVX;MURA TA;TAIYO YUDEN;TDK | 1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                |            |
|      4 | C5, C8                                                   | -          |     2 | C0603C102 K1GAC;C16                                                                                                                    | KEMET;TDK                                           | 1000P F | CAPACITOR; SMT (0603); CERAMIC                                                                                          |            |

## Evaluates: MAX32010

|   ITEM | REF_DES                                   | DNI/D NP   | QTY                                         | MFG PART #                                                                                         | MANUFACTURER                            | VALUE    | DESCRIPTION                                                                                              | COMMENTS   |
|--------|-------------------------------------------|------------|---------------------------------------------|----------------------------------------------------------------------------------------------------|-----------------------------------------|----------|----------------------------------------------------------------------------------------------------------|------------|
|      5 | C6, C9, C63, C65                          | -          | 4 C1608X5R1 E475K080A C; GRM188R61 E475KE11 |                                                                                                    | TDK;MURATA                              | 4.7UF    | DEGC; TC= CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R      |            |
|      6 | C10, C12- C16, C25- C36                   | -          | 18                                          | C1608X5R1 E106M080A C;CL10A106 MA8NRNC; GRM188R61 E106MA73;Z RB18AR61E 106ME01;G RT188R61E 106ME13 | TDK;SAMSUNG ELECTRONICS;MU RATA;;MURATA | 10UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                 |            |
|      7 | C11                                       | -          | 1                                           | C0603C473 K5RAC;GR M188R71H4 73KA61;GC M188R71H4 73KA55;CG A3E2X7R1H 473K080AA                     | KEMET;MURATA; MURATA;TDK                | 0.047U F | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.047UF; 50V; TOL=10%; MODEL=X7R; TG=- 55 DEGC TO +125 DEGC; TC=X7R |            |
|      8 | C17-C24, C37-C48, C64, C66- C68, C70- C73 | -          | 28                                          | 06033C104J AT2A                                                                                    | AVX                                     | 0.1UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                |            |
|      9 | C49                                       | -          | 1                                           | GCM188R71 H332KA37                                                                                 | MURATA                                  | 3300P F  | CAPACITOR; SMT (0603); CERAMIC CHIP; 3300PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R              |            |
|     10 | C50                                       | -          | 1                                           | C0603C223 K5RAC;GR M188R71H2 23K;C1608X 7R1H223K0 80AA;GCJ18 8R71H223K A01                         | KEMET;MURATA;T DK;MURATA                | 0.022U F | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.022UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R             |            |
|     11 | C51, C54, C60                             | -          | 3                                           | CC0603KRX 7R9BB331                                                                                 | YAGEO                                   | 330PF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 330PF; 50V; TOL=10%; TG=-55                                         |            |

## MAX32010 Evaluation Kit

## Evaluates: MAX32010

|   ITEM | REF_DES                  | DNI/D NP   | QTY                                     | MFG PART #                              | MANUFACTURER             | VALUE               | DESCRIPTION                                                                                           | COMMENTS         |
|--------|--------------------------|------------|-----------------------------------------|-----------------------------------------|--------------------------|---------------------|-------------------------------------------------------------------------------------------------------|------------------|
|        |                          |            |                                         |                                         |                          |                     | DEGC TO +125 DEGC; TC=X7R                                                                             |                  |
|     12 | C52, C56 -               | 2          | C0603X7R5 00-472KNE; GRM188R71 H472KA01 | VENKEL                                  | LTD.;MURATA              | 4700P F             | CAPACITOR; SMT (0603); CERAMIC CHIP; 4700PF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R   |                  |
|     13 | C53                      | - 1        | C0603X7R5 RAC                           | 00103JNP;C 0603C103J5                   | VENKEL LTD;KEMET         | 0.01UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; MODEL=X7R; TG=- 55 DEGC TO +125 DEGC; TC=+/ |                  |
|     14 | C55, C58                 | -          | 2                                       | C0603C152 K5RAC; C0603X7R5 00-15        | KEMET;VENKEL LTD         | 1500P F             | CAPACITOR; SMT (0603); CERAMIC CHIP; 1500PF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R   |                  |
|     15 | C57, C59                 | -          | 2                                       | 06035C101J AT                           | AVX                      | 100PF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R             |                  |
|     16 | C61, C62                 | -          | 2                                       | C0603C0G5 00-271JNE; GRM1885C1 H271JA01 | VENKEL LTD.;MURATA       | 270PF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 270PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G     |                  |
|     17 | DS1-DS3                  | -          | 3                                       | LTST- C190CKT                           | LITE-ON ELECTRONICS INC. | LTST- C190C KT      | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                       | RED              |
|     18 | DS4, DS5, DS6, DS8- DS11 | -          | 7                                       | LTST- C193KGKT- 5A                      | LITE-ON ELECTRONICS INC. | LTST- C193K GKT- 5A | DIODE; LED; STANDARD; YELLOW-GREEN; SMT (0603); PIV=1.9V; IF=0.005A; -55 DEGC TO +85 DEGC             | (DS4,DS5:GR EEN) |
|     19 | DUT_NO DE, TP14          | - 2        |                                         | 575-4                                   | KEYSTONE                 | 575-4               | RECEPTACLE; JACK; BANANA; 0.203IN [5.2MM] DIA X 0.218IN                                               |                  |

## Evaluates: MAX32010

| ITEM               | REF_DES                        | DNI/D NP   | QTY               | MFG PART #    | MANUFACTURER              | VALUE                                                             | DESCRIPTION                                                                                                      | COMMENTS   |
|--------------------|--------------------------------|------------|-------------------|---------------|---------------------------|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|------------|
| 20                 | FB1-FB6 -                      | 6          | MPZ1608S2 21ATA00 | TDK           | 220                       | BRASS INDUCTOR; SMT (0603); FERRITE- BEAD; 220; TOL=+/- 25%; 2.2A |                                                                                                                  |            |
| 21 GND, TEMP, VCC, | VDD, VEE                       | - 5        | 9020              | BUSS          | WEICO WIRE                | MAXIM PAD                                                         | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                         |            |
| 22 RA, RC,         | HITEMP, ILIMHI, ILIMLO, RB, RD | -          | 7                 | 5000          | KEYSTONE                  | N/A                                                               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 23                 | J1-J3, J6- J9                  | -          | 7                 | PCC02SAA N    | SULLINS                   | PCC02 SAAN                                                        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                         |            |
| 24 J4              |                                | -          | 1                 | PBC04DAA N    | SULLINS ELECTRONICS CORP. | PBC04 DAAN                                                        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65 DEGC TO +125 DEGC                                 |            |
| 25 J5              |                                | -          | 1                 | PEC03SAA N    | SULLINS                   | PEC03 SAAN                                                        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                        |            |
| 26 J10             |                                | - 1        | 139               | 4- 151502UA77 | COOL INNOVATIONS          | 4- 151502 UA771 39                                                | MACHINE FABRICATED; HSINK; FAN SINK; 38.1MMX38.1MMX1 5.6MM ;                                                     |            |
| 27                 | MH1-MH8                        | -          | 8                 | 9032          | KEYSTONE                  | 9032                                                              | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                        |            |

| ITEM                       | REF_DES                                     | DNI/D NP   | QTY             | MFG PART #                                     | MANUFACTURER                      | VALUE                                             | DESCRIPTION                                             | COMMENTS   |
|----------------------------|---------------------------------------------|------------|-----------------|------------------------------------------------|-----------------------------------|---------------------------------------------------|---------------------------------------------------------|------------|
| 28 R4,                     | R7 -                                        | 2          | ERJ- 3GEYJ394   | PANASONIC                                      | 390K                              | RESISTOR; 390K OHM; 5%; 200PPM; 0.10W; THICK FILM | 0603;                                                   |            |
| 29 R5,                     | R8 -                                        | 2          | PNM0603E5 002BS | VISHAY                                         | DALE                              | 50K                                               | RESISTOR; 0603; 50K OHM; 0.1%; 25PPM; 0.15W; THIN FILM  |            |
| 30 R6, R36,                | R9, R40 -                                   | 4          |                 | CRCW0603 10K0FK;ERJ -3EKF1002                  | VISHAY DALE;PANASONIC             | 10K                                               | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM      |            |
| 31 R15,                    | R10-R13, R17                                | -          | 6               | CRCW0603 0000Z0                                | VISHAY DALE                       | 0                                                 | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM     |            |
| 32                         | R14, R16, R35, R39, R42, R44, R47, R48, R50 | -          | 9               | CRCW0603 1K00FK;ERJ -3EKF1001                  | VISHAY DALE;PANASONIC             | 1K                                                | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM       |            |
| 33 R18-R25                 | -                                           |            | 8               | CRCW0603 22K0FK                                | VISHAY DALE                       | 22K                                               | RESISTOR, 0603, 22K OHM, 1%, 100PPM, 0.10W, THICK FILM  |            |
| 34 R31,                    | R33 -                                       |            | 2               | CRCW1210 10R0FKEAH P;CRGP121 0F10R             | VISHAY DRALORIC;TE CONNECTIVITY   | 10                                                | RESISTOR; 1210; 10 OHM; 1%; 100PPM; 0.75W; THICK FILM   |            |
| 35 R32,                    | R34                                         | -          | 2               | CRCW1206 1R54FKEAH P                           | VISHAY                            | 1.54                                              | RES; SMT (1206); 1.54; 1%; +/- 100PPM/DEGC; 0.75W       |            |
| 36 R37,                    | R38                                         | -          | 2               | CRCW1210 100RFK                                | VISHAY DALE                       | 100                                               | RESISTOR; 1210; 100 OHM; 1%; 100PPM; 0.5W; THICK FILM   |            |
| 37 R41, R43, R45, R46, R49 | -                                           |            | 5               | TNPW06031 0K0BE; RN731JTTD 1002B               | VISHAY DALE;KOA SPEER ELECTRONICS | 10K                                               | RESISTOR; 0603; 10K OHM; 0.1%; 25PPM; 0.1W; THICK FILM  |            |
| 38 R51                     | -                                           |            | 1               | RCW06033K 30FK;RC060 3FR- 073K3L;RK7 3H1J3301F | VISHAY;YAGEO;VI SHAY              | 3.3K                                              | RESISTOR, 0603, 3.3K OHM, 1%, 100PPM, 0.10W, THICK FILM |            |
| 39 R53,                    | R55                                         | -          | 2               | ERJ- 3GEYJ102                                  | PANASONIC                         | 1K                                                | RESISTOR; 0603; 1K OHM; 5%; 200PPM; 0.10W; THICK FILM   |            |
| 40 R54,                    | R68                                         | -          | 2               | CRCW0603 2K70FK;ERJ -3EKF2701                  | VISHAY DALE;PANASONIC             | 2.7K                                              | RESISTOR, 0603, 2.7K OHM, 1%, 100PPM, 0.10W, THICK FILM |            |

## MAX32010 Evaluation Kit

## Evaluates: MAX32010

| ITEM                        | REF_DES    |   DNI/D NP | QTY              | MFG PART #                 | MANUFACTURER       | VALUE                                                   | DESCRIPTION                                                                                                                    | COMMENTS   |
|-----------------------------|------------|------------|------------------|----------------------------|--------------------|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|------------|
| 41 R56, R60,                | R57, R61 - |          4 | ERJ- 3EKF3481    | PANASONIC                  | 3.48K              | RESISTOR; 0603; 3.48K OHM; 1%; 100PPM; 0.1W; THICK FILM |                                                                                                                                |            |
| 42 R58, R59, R62, R63       | -          |          4 | RNCP0603F TD2K00 | STACKPOLE ELECTRONICS INC. |                    | 2K                                                      | RESISTOR; 0603; 2K OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                         |            |
| 43 SU1-SU9                  | -          |          9 | NPC02SXO N-RC    | SULLINS ELECTRONICS CORP.  | NPC02 SXON- RC     |                                                         | CONNECTOR; FEMALE; MINI SHUNT; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                                   |            |
| 44 TP1-TP4                  | -          |          4 |                  | 3267                       | POMONA ELECTRONICS | 3267                                                    | CONNECTOR; MALE; PANELMOUNT; STANDARD UNINSULATED BANANA JACK; STRAIGHT; 1PIN                                                  |            |
| 45 TP5, TP8, TP22, VDAC, VL | -          |          5 |                  | 5005                       | KEYSTONE           | N/A                                                     | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE                   |            |
| 46 TP6, TP7, TP21           | -          |          3 |                  | 5006                       | KEYSTONE           | N/A                                                     | FINISH; TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 47 U1,                      | U2 -       |          2 | ATA8+            | MAX16910C                  | MAXIM              | MAX16 910CA TA8+                                        | IC; VREG; 0.2A; ULTRA-LOW QUIESCENT CURRENT; LINEAR REGULATOR; TDFN8-EP 3X3                                                    |            |
| 48 U3                       | -          |          1 | ATB+             | MAX38903A                  | MAXIM              | MAX38 903AA TB+                                         | EVKIT PART-IC; PKG. CODE: T1033+1C; PKG. OUTLINE NO.: 21- 0137; PACKAGE                                                        |            |

## Evaluates: MAX32010

|   ITEM | REF_DES   | DNI/D NP   | QTY   | MFG PART #    | MANUFACTURER   | VALUE            | DESCRIPTION                                                                                                      | COMMENTS   |
|--------|-----------|------------|-------|---------------|----------------|------------------|------------------------------------------------------------------------------------------------------------------|------------|
|        |           |            |       |               |                |                  | LAND PATTERN: 90-0003                                                                                            |            |
|     49 | U4, U5    | - 2        | SA50+ | MAX6126AA     | MAXIM          | MAX61 26AAS A50+ | IC; VREF; ULTRA- HIGH PRECISION; ULTRA-LOW NOISE; SERIES VOLTAGE REFERENCE; NSOIC8 150MIL                        |            |
|     50 | U6, U7    | -          | 2     | MAX6126B2 1+  | MAXIM          | MAX61 26B21+     | IC; VREF; ULTRA- HIGH PRECISION; ULTRA-LOW NOISE; SERIES VOLTAGE REFERENCE; UMAX8                                |            |
|     51 | U8-U11    | -          | 4     | MAX5322EA I+  | MAXIM          | MAX53 22EAI+     | IC; DAC; +/-10V, DUAL, 12-BIT, SERIAL, VOLTAGE- OUTPUT DAC; SSOP28                                               |            |
|     52 | U13       | -          | 1     | MAX32625P ICO | MAXIM          | MAX32 625PIC O   | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625 ARM CORTEX-M4F; BOARD; LAMINATED PLASTIC WITH COPPER CLAD; |            |
|     53 | U14       | -          | 1     | MAX44245A UD+ | MAXIM          | MAX44 245AU D+   | IC; OPAMP; 36V; PRECISION; LOW- POWER; 90MICRO- AMPERE; QUAD OP AMPS; TSSOP14                                    |            |
|     54 | U15       | -          | 1     | MAX14759E TA+ | MAXIM          | MAX14 759ET A+   | IC; ASW; ABOVE- AND BELOW-THE- RAILS LOW ON- RESISTANCE ANALOG SWITCH; TDFN8-EP                                  |            |
|     55 | U16       | -          | 1     | MAX1033BE UP+ | MAXIM          | MAX10 33BEU P+   | IC; ADC; 4- CHANNEL; +/-3 X VREF MULTIRANGE INPUTS; SERIAL 14-BIT ANALOG- TO-DIGITAL CONVERTER;                  |            |
|     56 | PCB       | -          | 1     | MAX32010      | MAXIM          | PCB              | PCB:MAX32010                                                                                                     | -          |

| ITEM   | REF_DES        | DNI/D NP   |   QTY | MFG PART #          | MANUFACTURER              | VALUE           | DESCRIPTION                                                                    | COMMENTS                                                                       |
|--------|----------------|------------|-------|---------------------|---------------------------|-----------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| 57     | MISC1          | DNI        |     1 | 3025010-03          | QUALTEK ELECTRONICS CORP  | 302501 0-03     | CONNECTOR; MALE; USB-A_MINI- B; USB 4P(A)/M - USB MINI 5P(B)/M; STRAIGHT; 36IN | CONNECTOR; MALE; USB-A_MINI- B; USB 4P(A)/M - USB MINI 5P(B)/M; STRAIGHT; 36IN |
| 58     | D1-D3          | DNP        |     0 | 1N5250B             | FAIRCHILD SEMICONDUCTOR   | 20V             | DIODE, ZENER, DO-35, Pd=0.5W, Vz=20V@Iz=6.2mA                                  |                                                                                |
| 59     | U12            | -          |     0 | MAX32010D CCQ+      | MAXIM                     | MAX32 010DC CQ+ | IC; PWRMOD; 25V SPAN; 800 MILLIAMPERE DEVICE POWER SUPPLY (DPS); TQFP100-IDP   |                                                                                |
| 60     | R1-R3, R26-R30 | DNP        |     0 | N/A                 | N/A                       | OPEN            | PACKAGE OUTLINE 0603 RESISTOR                                                  |                                                                                |
| 61     | J13            | -          |     1 | 01- PBC05SAA N5P-21 | SULLINS ELECTRONICS CORP  | PBC05 SAAN      | EVKIT-NOT FOR TEST                                                             |                                                                                |
| 62     | J11            | -          |     1 | 01- PBC04SAA N4P-21 | SULLINS ELECTRONICS CORP. | PBC04 SAAN      | EVKIT-NOT FOR TEST                                                             |                                                                                |
| 63     | J14,J15        | -          |     1 | 01- PEC07SAA N7P-21 | SULLINS ELECTRONICS CORP. | PEC07 SAAN      | ACTIVE                                                                         |                                                                                |
| TOTAL  |                |            |   231 |                     |                           |                 |                                                                                |                                                                                |

## MAX32010 EV Kit Schematics

<!-- image -->

## MAX32010 EV Kit Schematics (continued)

<!-- image -->

## MAX32010 EV Kit Schematics (continued)

<!-- image -->

## MAX32010 EV Kit PCB Layouts

MAX32010 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

O

## MAX32010 EV Kit PCB Layouts (continued)

MAX32010 EV Kit PCB Layout-Top

<!-- image -->

## MAX32010 EV Kit PCB Layouts (continued)

MAX32010 EV Kit PCB Layout-Internal 2

<!-- image -->

## MAX32010 EV Kit PCB Layouts (continued)

MAX32010 EV Kit PCB Layout-Internal 3

<!-- image -->

## MAX32010 EV Kit PCB Layouts (continued)

MAX32010 EV Kit PCB Layout-Bottom

<!-- image -->

## MAX32010 EV Kit PCB Layouts (continued)

MAX32010 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

## Appendix

MAX32010 EV kit installer installs the MAX32010EvaluationKitGUI.exe (210KB size). Steps to install are as follows:

1. Click Next on the MAX32010 EV Kit GUI setup window .
2. Select the Installation folder.

<!-- image -->

<!-- image -->

3. Click Next to confirm the installation.
4. Installation process starts. Click Close after the installation .

<!-- image -->

<!-- image -->

## MAX32010 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 11/20           | Release for Market Intro | -               |

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere. Windows is a registered trademark and registered service mark of Microsoft Corporation.

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Evaluates: MAX32010