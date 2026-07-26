<!-- lastmod 2022-08-03 -->
## MAX11301WING Expansion Board

## General Description

The  MAX11301WING  is  an  expansion  board  designed to help engineers and students alike to rapidly prototype mixed signal applications using the MAX11301. The form factor  is  a  small  0.9in  x  2.0in  dual-row  header  footprint compatible with breadboards, feather boards from Maxim and  Adafruit®,  and  additional  expansion  boards,  also called wings.

Ordering Information appears at end of data sheet.

## MAX113101WING Board Photo

<!-- image -->

PIXI is a registered trademark of Maxim Integrated Products, Inc. Adafruit is a registered trademark of Adafruit Industries.

## Evaluates: MAX11301 PIXI

Mixed-Signal IO

## Benefits and Features

- Expansion Board
- 0.9in x 2.0in DIP Form Factor
-  Breadboard Compatible
-  Feather Compatible
- ±7.5V Split Rail Supply
-  Supports ±5V Output Swings
-  50mA Limit
-  External Power Supply Selectable
- All 20 MAX11301 Ports Accessible
- Connections for External Temperature Sensors
- MAX11301 Features
- 20 Configurable Mixed-Signal Ports
-  Up to 20 12-Bit ADC Inputs
-  Up to 20 12-Bit DAC Outputs
-  Up to 20 GPIO
-  Analog Switch Between Adjacent PIXI ®  Ports
-  Internal/External Temperature Sensors

<!-- image -->

## MAX11301WING Expansion Board

## Detailed Description

The  MAX11301WING  expansion  board  is  designed  to provide  a  compact  rapid  development  platform  for  the MAX11301  mixed  signal  IO  IC.  Header  H2  provides access to all 20 IO ports of the MAX11301 along with generous ground connection points. Headers H4 and H5 provide an interface to D0P/N and D1P/N of the MAX11301 for  two  diode  connected  transistors  implementing  temperature sensors. Installation of shunts on J1 and J2 connect AVDDIO and AVSSIO to VBST and VINV. VBST and VINV are set to ±7.5VDC, respectively, and can provide 50mA each. Removing the shunts on J1 and J2 allows for an external power supply to source AVDDIO and AVSSIO.

The  dual  inline  pinout  and  form  factor  for  this  board are based on the Adafruit feather series of boards. It is intended to be compatible with many of their boards, but it is not guaranteed to work with all of them.

Figure 1. DIP Pinout

<!-- image -->

Mbed is a trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

## Evaluates: MAX11301 PIXI Mixed-Signal IO

## Firmware Development

The simplest way to develop firmware for the MAX11301WING  is  through  the  Mbed™  development site.  At  the  Mbed  site  you  can  import  examples  into their  online  IDE,  then  edit,  compile,  and  load  them  into your  Mbed-  compatible  Feather  board  without  installing any  software.  Go  to https://os.mbed.com/platforms/ MAX32630FTHR/ to  get  started  programming  with  the MAX32630FTHR  now.  To  support  software  development with the MAX11301, an example library has been developed  and  can  be  found  at  the  following  link, https://os.mbed.com/teams/MaximIntegrated/code/ MAX113XX\_Pixi/ .

To  support  the  configuration  of  the  MAX113XX  PIXI device,  Maxim  has  developed  a  configuration  GUI  that outputs a header file containing register definitions for the user  configuration.  The  Mbed  library  referenced  above requires a configuration file from this configuration GUI. The  configuration  GUI  can  be  found  at  the  following link: https://www.maximintegrated.com/en/products/ analog/data-converters/digital-to-analog-converters/ MAX11301.html/tb\_tab2 .

Additionally,  a  MAX11301WING\_Demo  has  been  created  to  help  expedite  prototyping  and  configures  three PIXI ports: +5V DAC, -5V DAC, and a bipolar ADC with an analog range of -5V to +5V. Visit the following link to obtain the source code for the MAX11301WING\_Demo: https://os.mbed.com/teams/Maxim-Integrated/code/ MAX11301WING\_Demo/ .  For  additional  information  for getting  started  with  the  MAX11301WING,  refer  to  the MAX11301 Quick Start, which is located on the Design Resource tab of the product page.

## Table 1. DIP Header H1 Pins

| PIN        | PORT   | DESCRIPTION   |
|------------|--------|---------------|
| 1, 3, 5-15 | N.C.   | Not Connected |
| 2          | 3V3    | 3.3V Input    |
| 4, 16      | GND    | System Ground |

│

## MAX11301WING Expansion Board

## Table 2. DIP Header H3 Pins

Note 1: Do not install R15 and R16 at the same time. This action shorts VBUS and SYS.

| PIN        | PORT   | DESCRIPTION                                                              |
|------------|--------|--------------------------------------------------------------------------|
| 1          | SYS    | Battery connection. Install R15 (default) for SYS to source VCC (Note 1) |
| 2, 4, 7-10 | N.C.   | Not Connected                                                            |
| 3          | VBUS   | 5V USB connection. Install R16 for VBUS to source VCC (Note 1)           |
| 5          | INT    | Active-low, open-drain interrupt output                                  |
| 6          | CNVT   | Active-low,ADC trigger control input                                     |
| 11         | SCL    | I 2 C serial clock signal                                                |
| 12         | SDA    | I 2 C serial data signal                                                 |

## Table 3. Header H2 Pins

| PIN                                 | PORT   | DESCRIPTION   |
|-------------------------------------|--------|---------------|
| 1                                   | PORT0  | MAX11301 P0   |
| 4                                   | PORT1  | MAX11301 P1   |
| 7                                   | PORT2  | MAX11301 P2   |
| 10                                  | PORT3  | MAX11301 P3   |
| 13                                  | PORT4  | MAX11301 P4   |
| 16                                  | PORT5  | MAX11301 P5   |
| 19                                  | PORT6  | MAX11301 P6   |
| 22                                  | PORT7  | MAX11301 P7   |
| 25                                  | PORT8  | MAX11301 P8   |
| 28                                  | PORT9  | MAX11301 P9   |
| 3                                   | PORT10 | MAX11301 P10  |
| 6                                   | PORT11 | MAX11301 P11  |
| 9                                   | PORT12 | MAX11301 P12  |
| 12                                  | PORT13 | MAX11301 P13  |
| 15                                  | PORT14 | MAX11301 P14  |
| 18                                  | PORT15 | MAX11301 P15  |
| 21                                  | PORT16 | MAX11301 P16  |
| 24                                  | PORT17 | MAX11301 P17  |
| 27                                  | PORT18 | MAX11301 P18  |
| 30                                  | PORT19 | MAX11301 P19  |
| 2, 5, 8, 11, 14, 17, 20, 23, 26, 29 | GND    | System Ground |

## Table 4. Header H4 and H5 Pins

| PIN   | PORT   | DESCRIPTION                                                              |
|-------|--------|--------------------------------------------------------------------------|
| H4-1  | D0P    | Positive connection of diode connected transistor (2N3904 or equivalent) |
| H4-2  | D0N    | Negative connection of diode connected transistor (2N3904 or equivalent) |
| H5-1  | D1P    | Positive connection of diode connected transistor (2N3904 or equivalent) |
| H5-2  | D1N    | Negative connection of diode connected transistor (2N3904 or equivalent) |

## Table 5. Jumpers

| PIN   | DEFAULT     | DESCRIPTION                     |
|-------|-------------|---------------------------------|
| J1    | Installed   | Connects VINV (-7.5V) to AVSSIO |
| J2    | Installed   | Connects VBST (+7.5V) to AVDDIO |
| R15   | Installed   | Connects SYS to VCC             |
| R16   | Uninstalled | Connects VBUS to VCC            |

## Ordering Information

| PART          | TYPE            |
|---------------|-----------------|
| MAX11301WING# | Expansion Board |

#Denotes RoHS compliance.

Evaluates: MAX11301 PIXI

Mixed-Signal IO

│

## MAX11301WING Expansion Board

## MAX11301WING EV Kit Bill of Materials

|   QTY | REF DES                           | MFG                       | PART NUMBER         | DESCRIPTION                                                                                                              |
|-------|-----------------------------------|---------------------------|---------------------|--------------------------------------------------------------------------------------------------------------------------|
|     1 | C1                                | AVX                       | F381A226MSA         | CAPACITOR; SMT (2012); CONDUCTIVE POLYMER; 22UF; 10V; TOL=20%                                                            |
|     8 | C2, C4, C7- C9, C11, C14, C17     | MURATA                    | GRM188R71E105KA12D  | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                 |
|     1 | C3                                | AVX                       | 0603ZC224JAT2A      | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF; 10V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                               |
|     2 | C5, C6                            | AVX                       | 08053C225KAT2A      | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                               |
|     7 | C10, C12, C13, C16, C20, C22, C24 | AVX                       | 06033C104JAT2A      | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                |
|     2 | C15, C18                          | SAMSUNG ELECTRONICS       | CL31B106KOHNNN      | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                |
|     3 | C19, C21, C23                     | AVX                       | 0805YC475KAT2A      | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                               |
|     2 | D1, D2                            | CENTRAL SEMICONDUCTOR     | CFSH05-20L          | DIODE; SCH; SMT (SOD882); PIV=20V; IF=0.5A                                                                               |
|     1 | D3                                | KINGBRIGHT                | APT1608LSECK/J3-PRV | DIODE; LED; HYPER RED WATER CLEAR; RED; SMT (0603); VF=1.8V; IF=0.002A                                                   |
|     1 | D4                                | KINGBRIGHT                | APT1608LVBC/D       | DIODE; LED; BLUE WATER CLEAR; BLUE; SMT (0603); VF=2.65V; IF=0.002A                                                      |
|     1 | D5                                | KINGBRIGHT                | APT1608LZGCK        | DIODE; LED; GREEN WATER CLEAR; GREEN; SMT (0603); VF=2.65V; IF=0.002A                                                    |
|     1 | H2                                | SAMTEC                    | TSW-110-26-T-T      | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; STRAIGHT; 30PINS                                                              |
|     4 | H4, H5, J1, J2                    | SAMTEC                    | TSW-102-07-G-S      | CONNECTOR; MALE; THROUGH HOLE; 0.025 IN SQ POST HEADER; STRAIGHT; 2PINS                                                  |
|     1 | L1                                | COILCRAFT                 | LPS3010-222MR       | INDUCTOR; SMT; MAGNETICALLY SHIELDED; 2.2UH; TOL=+/- 20%; 1.1A                                                           |
|     1 | L2                                | COILCRAFT                 | LPS3010-472MR       | INDUCTOR; SMT; MAGNETICALLY SHIELDED; 4.7UH; TOL=+/- 20%; 0.95A                                                          |
|     1 | R1                                | YAGEO                     | RC0603FR-07649KL    | RESISTOR; 0603; 649K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                   |
|     1 | R2                                | YAGEO                     | RC0603FR-07100KL    | RESISTOR; 0603; 100K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                   |
|     1 | R3                                | YAGEO                     | RC0603FR-07187KL    | RESISTOR; 0603; 187K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                   |
|     1 | R4                                | YAGEO                     | RC0603FR-0730K9L    | RESISTOR; 0603; 30.9K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                  |
|     1 | R5                                | PANASONIC                 | ERJ-3EKF1541        | RESISTOR; 0603; 1.54K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                  |
|     2 | R6, R7                            | YAGEO                     | RC0603FR-074K99L    | RESISTOR; 0603; 4.99K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                  |
|     2 | R8, R9                            | YAGEO                     | RC0603FR-073K3L     | RESISTOR; 0603; 3.3K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                   |
|     1 | R10                               | YAGEO                     | RC0603FR-0710KL     | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                    |
|     3 | RG, R13, R14                      | SAMSUNG ELECTRONICS       | RC1608J000CS        | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                     |
|     2 | SH1, SH2                          | SULLINS ELECTRONICS CORP. | STC02SYAN           | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL  |
|     1 | U1                                | MAXIM                     | MAX8614AETD+        | IC; CONV; DUAL-OUTPUT (+AND -) DC-DC CONVERTER FOR CCD; TDFN14                                                           |
|     1 | U2                                | MAXIM                     | MAX11301GTL+        | IC; DATACON; PIXI; 20-PORT PROGRAMMABLE MIXED-SIGNAL I/O WITH 12-BIT ADC; 12-BIT DAC;ANALOG SWITCHES;AND GPIO; TQFN40-EP |
|     1 | U3                                | MAXIM                     | MAX1726EUK50+       | IC; VREG; ULTRA-LOW IQ LOW-DROPOUT LINEAR REGULATOR; SOT23-5                                                             |

│

Evaluates: MAX11301 PIXI

Mixed-Signal IO

## MAX11301WING EV Kit Schematic

<!-- image -->

│

Evaluates: MAX11301 PIXI

## MAX11301WING EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX11301 PIXI

## MAX11301WING EV Kit Schematic (continued)

<!-- image -->

│

## MAX11301WING Expansion Board

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                     | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------|-----------------|
|                 0 | 1/18            | Initial release                 | -               |
|                 1 | 2/18            | Updated Figure 1 and schematics | 2, 5-7          |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSlied  MaxiP ,ntegrated reserYes tKe rigKt to FKange tKe FirFuitr\ and sSeFifiFations ZitKout notiFe at an\ tiPe

│

Evaluates: MAX11301 PIXI

Mixed-Signal IO