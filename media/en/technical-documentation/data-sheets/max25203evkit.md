<!-- lastmod 2022-08-02 -->
## MAX25203 Evaluation Kit

## General Description

The MAX25203 evaluation kit (EV kit) is a fully assembled and  tested  board  for  evaluating  the  MAX25203  dualphase  automotive  synchronous  boost  controller.  The MAX25203 enables infotainment systems to stay in regulation during cold crank or start-stop operation all the way down to battery input of 1.8V. It can also be used to generate backlight voltage and class D audio amplifier voltages. This  device  can  start  with  an  input  voltage  supply  from 4.5V to 42V and can operate down to 1.8V after start-up and has a low 5µA shutdown supply current.

The MAX25203 features a power-OK monitor, overvoltage and undervoltage lockout. Protection features include cycle-by-cycle  current  limit  and  thermal  shutdown.  It  is specified for operation over the -40°C to +125°C automotive temperature range.

## MA25203 EV Kit Files

| FILE                     | DESCRIPTION           |
|--------------------------|-----------------------|
| SetupMAX25203EVkitV1.exe | Windows GUI Installer |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25203EVKIT# | EV Kit |

## Features

- Meets Stringent OEM Module Power Consumption and Performance Specifications
- ±1.5% Output-Voltage Accuracy at FB
- Output Voltage Adjustable Between 12V and 65V
- 5µA Shutdown Supply Current
- High Efficiency and Current Sharing
- Preset Gate Drive Voltage for External MOSFETs from 5.5V to 10V Allows User to Optimize External MOSFETs
- Current Sharing Accuracy is ±5% Between 2 Phases to Improve System Efficiency
- EMI Reduction Features Reduce Interference with Sensitive Radio Bands without Sacrificing Wide Input Voltage Range
- Spread-Spectrum Option
- Frequency-Synchronization Input
- Resistor-Programmable Frequency Between 200kHz and 2.2MHz
- Integration and Thermally Enhanced Packages Save Board Space and Cost
- Current-Mode Controllers with Forced-Continuous and Skip Modes
- Side Wettable 32-Pin TQFN-EP Package
- Protection Features and I2C diagnostics for Improved System Reliability
- Supply Undervoltage Lockout
- Die Temperature Monitoring via I2C
- Short Circuit Protection with True Shutdown
- Individual Phase Current Monitoring via I2C

<!-- image -->

Evaluates: MAX25203

## MAX25203 Evaluation Kit

## Quick Start

## Required Equipment

- MAX25203 EV kit
- 12V DC power supply or battery
- Digital multimeter (DMM)
- Electronic load

## Procedure (Stand-Alone)

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify the jumpers are set to the default positions as shown in Table 1.
- 2) Preset the power supply voltage between 5V and 36V, and make sure the current limit is adequate for the desired load.
- 3) Disable or turn off the power supply.  Do not turn on the supply until all connections are completed.
- 4) Connect the power supply to the BATT screw terminals on the EV kit.
- 5) Connect the load to the OUT screw terminals on the EV kit.
- 6) Turn on or enable the power supply.
- 7) With the DMM, verify the voltage from the OUT to GND terminal of the EV kit is 40V.

## Table 1. Jumper Settings

| JUMPER   | DESCRIPTION                                                                                                                                                                                          | DEFAULT   |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| J1       | Feedback Select. Connect 1-2 for external feedback divider (40V output). Connect 2-3 to use I2C or PWM input for setting the output voltage.                                                         | 1-2       |
| J2       | SCL pullup resistor.                                                                                                                                                                                 | 1-2       |
| J3       | SDApullup resistor.                                                                                                                                                                                  | 1-2       |
| J10      | Enable. Connect 1-2 to enable controller, or 2-3 to disable.                                                                                                                                         | 1-2       |
| J13      | PGOOD LED and pullup resistor. Connect 1-2 to use LED and pullup.                                                                                                                                    | 1-2       |
| J22      | Test header. Do not connect.                                                                                                                                                                         | OPEN      |
| J26      | PWM input. Leave open when using the PWM input to control the output voltage. Connect 2-3 to set PWM low (recommended when not using the PWM input). Connect 1-2 to set PWM high.                    | 2-3       |
| J27      | Leave open                                                                                                                                                                                           | OPEN      |
| J28      | FSYNC clock select. Leave open when synchronizing the clock to an external source connected to FSYNC. Connect 1-2 for internal clock with forced PWM switching. Connect 2-3 for skip mode operation. | 1-2       |

Windows 7 and Windows 10 are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX25203

## Software Setup and Procedure

- 1) Download the latest version of the EV kit software for Windows ®  7/Windows ®  10 from www.maximintegrated.com/evkitsoftware .
- 2) Install the software on your PC by running the installer.
- 3) Connect the USB cable from your PC to the EV kit (USB connector on module installed at U2).
- 4) Verify the jumpers are set to the default positions as shown in Table 1.  To allow the software to control the output voltage, set J1 to position 2-3 (for fixed output voltage set to 1-2).
- 5) Preset the power supply voltage between 5V and 36V, and make sure the current limit is adequate for the desired load.
- 6) Disable or turn off the power supply.  Do not turn on the supply until all connections are completed.
- 7) Connect the power supply to the BATT screw terminals on the EV kit.
- 8) Connect the load to the OUT screw terminals on the EV kit.
- 9) Turn on or enable the power supply.
- 10)  Launch the EV kit software application.
- 11)  The EV kit software can be used to monitor the status and set various settings of the MAX25203.  Refer to the MAX25203 data sheet for details.

│

## Detailed Description of Hardware

## Enable/Shutdown

Enable/shutdown control is set by jumper J10 on the EV kit  (see Table  1).    Set  J1  to  the  ON  position  for  normal operation, or OFF for shutdown.  In shutdown mode, the MAX25203 shuts off its internal circuitry to reduce the current draw to below 5µA.

An external logic signal can be used to control the enable/ shutdown. For this, remove the shunt from J1 and connect the enable signal to pin 2 of J1.

## Skip Mode/Forced-PWM Operation

Use J28 to select between skip mode and forced-PWM operation. Skip mode is used to optimize light-load efficiency  by  allowing  the  controller  to  switch  only  as  necessary  to  maintain  regulation.  Forced-PWM  keeps  the switching  frequency  constant  over  the  full-load  range. Refer to the MAX25203 data sheet for more information.

## PGOOD

PGOOD is an open-drain output of the MAX25203 that pulls  low  when  the  output  is  out  of  regulation.  The  EV kit includes an LED to indicate the PGOOD status (LED lights when output is out of regulation).

## Evaluates: MAX25203

This  LED  and  pullup  resistor  can  be  disconnected  by removing the shunt from J13. This is recommended when measuring supply current.

Note the 3.3V pullup and LED supply is provided by the I2C interface board. If this is not connected when evaluating a stand-alone operation, an external logic supply can be connected to pin 1 of J4.

## External Synchronization

To  synchronize  to  an  external,  remove  the  shunt  from J28 and connect the clock signal to the FSYNC terminal. When using an external clock, the MAX25203 operates in forced-PWM mode and spread-spectrum does not apply.

Note that the EV kit is optimized for 400kHz operation.  A significant change from this frequency may require additional component changes. Refer to the MAX25203 data sheet for information on component selection.

## PWM Voltage Control

To use the PWM voltage control feature of the MAX25203, connect J1 pins 2-3, remove the shunt from J26 and connect the PWM control signal to the PWM terminal of the EV kit. Refer to the MAX25203 data sheet for more information on the PWM voltage control feature.

Figure 1. MAX25203 EV Kit GUI

<!-- image -->

## MAX25203 Evaluation Kit

## MAX25203 EV Kit Bill of Materials

| REF DES                      |   QTY | MANUFACTURER PART NUMBER              | VALUE   | DESCRIPTION                                                                                             |
|------------------------------|-------|---------------------------------------|---------|---------------------------------------------------------------------------------------------------------|
| C1                           |     1 | MURATAGCM188R71E- 472KA37             | 4700PF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 4700PF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;AUTO        |
| C2, C6, C8-C11               |     6 | PANASONIC EEH-ZC1H121P                | 120UF   | CAP; SMT (CASE_G); 120UF; 20%; 50V; ALUMI- NUM-ELECTROLYTIC                                             |
| C3                           |     1 | TDK CGA3E2X7R1H- 473K080AA            | 0.047UF | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.047UF; 50V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=X7R |
| C4                           |     1 | TDK CGA3E1X7R- 0J225K080AC            | 2.2UF   | CAPACITOR; SMT (0603); CERAMIC; 2.2UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO            |
| C5                           |     1 | MURATAGC- M1885C2A220JA16             | 22PF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 22PF; 100V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G;AUTO          |
| C7, C13, C20, C21, C43, C44  |     6 | MURATAGCJ188R71H- 104KA12             | 0.1UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;AUTO         |
| C12                          |     1 | TDK CGA5L3X7R1H475K- 160AB            | 4.7UF   | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;AUTO         |
| C22                          |     1 | MURATAGCM21BR71C- 475KA73             | 4.7UF   | CAP; SMT (0805); 4.7UF; 10%; 16V; X7R; CERAMIC CHIP; NOTE:AUTO                                          |
| C24, C25, C32, C34, C36      |     5 | UNITED CHEMI-CON EMH- S101ARA151MKG5S | 150UF   | CAP; SMT (CASE_KG5); 150UF; 20%; 100V; ALUMINUM-ELECTROLYTIC                                            |
| C28, C35, C37, C38, C40, C41 |     6 | TDK CGA6M3X- 7S2A475K200AE            | 4.7UF   | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S;AUTO        |
| D1, D2                       |     2 | DIODES INC BAV116WSQ                  |         | DIODE; SWT; SMT (SOD-323); PIV=85V; IF=0.215A                                                           |
| DRV                          |     1 | KEYSTONE 5007                         |         | TEST POINT                                                                                              |
| DS1                          |     1 | LITE-ON LTST-C190KRKT                 |         | DIODE; LED; ULTRA BRIGHTAlInCaP CHIP LED; RED; SMT; VF=2V; IF=0.025A                                    |
| J1, J10, J22, J26, J28       |     5 | SULLINS PCC03SAAN                     |         | CONNECTOR; MALE; THROUGH HOLE; BREAK- AWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC              |
| J2, J3, J13, J18, J19        |     5 | SULLINS PCC02SAAN                     |         | CONNECTOR; MALE; THROUGH HOLE; BREAK- AWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC              |
| J4                           |     1 | SULLINS PPTC102LJBN-RC                |         | CONNECTOR; FEMALE; THROUGH HOLE; BREAK- AWAY HEADER; RIGHTANGLE; 20PINS                                 |

│

Evaluates: MAX25203

## MAX25203 Evaluation Kit

## MAX25203 EV Kit Bill of Materials (continued)

| REF DES                           |   QTY | MANUFACTURER PART NUMBER          | VALUE   | DESCRIPTION                                                                       |
|-----------------------------------|-------|-----------------------------------|---------|-----------------------------------------------------------------------------------|
| J11, J12, J14, J15                |     4 | SAMTEC SSM-103-L-DV               |         | CONNECTOR; FEMALE; SMT; DOUBLE ROW; STRAIGHT; 6PINS                               |
| J16, J17                          |     2 | KEYSTONE 8199-2                   |         | PC SCREW TERMINAL; THROUGH-HOLE; STRAIGHT; 6-32 X 1/4L SCREW; RED; 6PINS          |
| J20, J21                          |     2 | SAMTEC SSW-112-22-F-D-VS          |         | CONNECTOR; FEMALE; SMT; 0.025 POST SOCK- ET; STRAIGHT; 24PINS                     |
| J27                               |     1 | SAMTEC TSW-104-07-L-S             |         | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS |
| J29, J30, J33, J34                |     4 | KEYSTONE 8199-3                   |         | PC SCREW TERMINAL; THROUGH-HOLE; STRAIGHT; 6-32 X 1/4L SCREW; BLACK; 6PINS        |
| J31, J32                          |     2 | KEYSTONE 8199-7                   |         | PC SCREW TERMINAL; THROUGH-HOLE; STRAIGHT; 6-32 X 1/4L SCREW; YELLOW; 6PINS       |
| L1, L2                            |     2 | COILCRAFT XAL1010-332ME           | 3.3UH   | INDUCTOR; SMT; COMPOSITE CORE; 3.3UH; TOL=+/-20%; 18.2A                           |
| LX1, LX2                          |     2 | HARWIN S2751-46                   |         | TESTPOINT; SMT; TEST TERMINAL 2MMX1.2MM; TIN FINISH                               |
| MH1-MH4                           |     4 | KEYSTONE 9032                     |         | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON         |
| Q1-Q6                             |     6 | ON SEMICONDUCTOR NVMF- S6H824NT1G |         | TRAN; NCH; SO-8FL; PD-(115W); I-(107A); V-(80V)                                   |
| Q7                                |     1 | ON SEMICONDUCTOR SMP3003-DL-1E    |         | TRAN; PCH; POWER MOSFET; SOT-263-2L; PD- (90W); I-(-100A); V-(-75V)               |
| R1                                |     1 |                                   | 301K    | RESISTOR; 0603; 301K; 1%; 100PPM; 0.1W; THICK FILM                                |
| R2                                |     1 |                                   | 200K    | RESISTOR; 0603; 200K OHM; 0.1%; 100PPM; 0.1W; THICK FILM                          |
| R3                                |     1 |                                   | 5.1K    | RESISTOR; 0603; 5.1K OHM; 0.1%; 25PPM; 0.1W; THIN FILM                            |
| R4                                |     1 |                                   | 17.4K   | RESISTOR; 0603; 17.4K OHM; 1%; 100PPM; 0.10W; THICK FILM                          |
| R5-R8                             |     4 |                                   | 2.7     | RESISTOR, 0603, 2.7 OHM, 1%, 100PPM, 0.10W, THICK FILM                            |
| R11, R12, R15- R18, R30, R33, R35 |     9 |                                   | 0       | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                              |
| R13, R14                          |     2 |                                   | 0.002   | RES; SMT (2512); 0.002; 2%; +/-100PPM/DEGC; 3W                                    |
| R19, R20                          |     2 |                                   | 4.7K    | RESISTOR; 0603; 4.7K; 1%; 100PPM; 0.10W; THICK FILM                               |

│

Evaluates: MAX25203

## MAX25203 EV Kit Bill of Materials (continued)

| REF DES                      |   QTY | MANUFACTURER PART NUMBER   | VALUE   | DESCRIPTION                                                                       |
|------------------------------|-------|----------------------------|---------|-----------------------------------------------------------------------------------|
| R26, R28                     |     2 |                            | 10K     | RESISTOR; 0603; 10K OHM; 5%; 200PPM; 0.10W; THICK FILM                            |
| R27                          |     1 |                            | 1K      | RESISTOR; 0603; 1K OHM; 5%; 200PPM; 0.10W; THICK FILM                             |
| R29                          |     1 |                            | 20      | RESISTOR, 0603, 20 OHM, 1%, 100PPM, 0.10W, THICK FILM                             |
| R31                          |     1 |                            | 100K    | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                               |
| R32                          |     1 |                            | 49.9K   | RESISTOR; 0603; 49.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                          |
| U1                           |     1 | MAXIM MAX25203ATJA/VY+     |         | DUAL-PHASE SYNCHRONOUS BOOST CONTROL- LER                                         |
| U2                           |     2 | SAMTEC BCS-110-L-S-TE      |         | CONNECTOR; FEMALE; THROUGH HOLE; TIGER CLAW PASS-THROUGH SOCKET; STRAIGHT; 10PINS |
| U2_MODULE                    |     1 | MAXIM MAX32625PICO         |         |                                                                                   |
| C23, C26, C30, C33, C39, C42 |     0 |                            | DNI     |                                                                                   |
| C27, C29, C31                |     0 |                            | DNI     |                                                                                   |
| D3                           |     0 |                            | DNI     |                                                                                   |
| D4                           |     0 |                            | DNI     |                                                                                   |
| D5, D6                       |     0 |                            | DNI     |                                                                                   |
| J5-J9                        |     0 |                            | DNI     |                                                                                   |
| Q8                           |     0 |                            | DNI     |                                                                                   |
| R9, R10, R34                 |     0 |                            | DNI     |                                                                                   |
| R21, R23                     |     0 |                            | DNI     |                                                                                   |
| R22, R24                     |     0 |                            | DNI     |                                                                                   |
| R25                          |     0 |                            | DNI     |                                                                                   |
| C14-C19                      |     0 |                            | DNI     |                                                                                   |

│

Evaluates: MAX25203

## MAX25203 EV Kit Schematics

<!-- image -->

Evaluates: MAX25203

## MAX25203 EV Kit Schematics (continued)

<!-- image -->

## MAX25203 EV Kit Layouts

MAX25203 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX25203 EV Kit Layouts (continued)

<!-- image -->

MAX25203 EV Kit Component Placement Guide-Bottom Silkscreen

│

## MAX25203 EV Kit Layouts (continued)

MAX25203 EV Kit PCB Layout-Top

<!-- image -->

│

## MAX25203 EV Kit Layouts (continued)

<!-- image -->

MAX25203 EV Kit PCB Layout-LAYER-2

│

## MAX25203 EV Kit Layouts (continued)

<!-- image -->

MAX25203 EV Kit PCB Layout-LAYER-3

│

## MAX25203 EV Kit Layouts (continued)

MAX25203 EV Kit PCB Layout-LAYER-4

<!-- image -->

│

## MAX25203 EV Kit Layouts (continued)

<!-- image -->

MAX25203 EV Kit PCB Layout-LAYER-5

│

## MAX25203 EV Kit Layouts (continued)

<!-- image -->

MAX25203 EV Kit PCB Layout-BOTTOM

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX25203