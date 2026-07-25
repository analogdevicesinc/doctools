<!-- lastmod 2022-08-05 -->
## MAX20067 Evaluation Kit/ MAX20067 Evaluation System

## General Description

The MAX20067 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that provides the voltages and  features  required  for  automotive  thin-film  transistor (TFT),  liquid-crystal  display  (LCD)  applications.  The  EV kit includes a synchronous boost converter, double-stage positive  charge  pump,  double-stage  negative  charge pump, VCOM buffer, and gate-shading push-pull switch. The EV kit can operate from 2.7V to 5.5V input voltages and  is  optimized  for  automotive  TFT-LCD  applications. The EV kit can be configured to operate in stand-alone mode or in I 2 C mode. The boost converter is configured for a 12V output that provides at least 200mA. The positive-gate voltage regulator provides 16V output and the negative-gate voltage regulator provides -6V. The VCOM buffer  provides  an  I 2 C-adjustable  output  voltage  initially biased at 6V.

Evaluate: MAX20067/MAX20067B

## Benefits and Features

- 2.7V to 5.5V Input Range
- Default Output Voltage
- 12V Output at 200mA, (Boost Converter)
- 16V Output at 10mA (Positive-Gate Voltage Regulator)
- -6V Output at 3mA (Negative-Gate Voltage Regulator)
- 6V Output at 130mA (VCOM Buffer)
- Selectable Switching Frequency (2.2MHz or 400kHz) with Spread-Spectrum Option
- Double-Stage Positive- and Negative-Regulated Charge Pumps
- Gate Shading Enabled
- Full Sequencing Flexibility
- I 2 C Programmability
- Dedicated GUI

The EV kit provides an I 2 C interface that can operate in conjunction with the MINIQUSB+ adapter board or a third-party I 2 C master, such as a general-purpose microcontroller. The EV  kit  also  includes  Windows ® -compatible  software  that provides a simple graphical user interface (GUI) for exercis -ing the features of the IC. The EV system includes both the EV kit and the MINIQUSB+ adapter board.

- C Driver Available
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

## MAX20067 Evaluation Kit/ MAX20067 Evaluation System

## MAX20067 EV Kit Files

| FILE                    | DECRIPTION            |
|-------------------------|-----------------------|
| MAX20067GUISetupVxx.exe | Windows GUI Installer |

## Quick Start

## Required Equipment

- MAX20067 EV kit
- 2.7V to 5.5V, 3A power supply
- Voltmeter
- MINIQUSB+ interface board with USB cable
- User-supplied Windows-compatible PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

## Manual Mode

- 1) Verify  that  shunts  are  installed  across  pins  1-2  on jumpers J1-J9.
- 2) Connect  the  positive  terminal  of  the  power  supply to  the  TFT\_POWER\_IN  PCB  pad  and  the  negative terminal to the PGND PCB pad.
- 3) Set the power-supply TFT\_POWER\_IN to 5V.
- 4) Turn on the power supply.
- 5) Verify that the green LED (DS1) is on.
- 6) Verify  that  the  boost  converter  (AVDD  PCB  pad)  is 12V.
- 7) Verify  that  the  VCOM  buffer  (VCOM  PCB  pad) regulator is 6V.
- 8) Verify that the positive-gate voltage regulator (VGON PCB pad) is approximately +16V.
- 9) Verify that the negative-gate voltage regulator (VGOFF PCB pad) is approximately -6V.

## Evaluate: MAX20067/MAX20067B

## I 2 C Mode

- 1) Visit www.maximintegrated/evkitsoftware to download the latest version of the EV kit software, MAX20067GUISetupVxx.exe.
- 2) Install  the  EV  kit  software  (GUI)  on  your  PC  by running the MAX20067GUISetupVxx.exe program. The EV kit software application will be installed together with the required MINIQUSB+ drivers.
- 3) Verify  that  shunts  are  installed  across  pins  1-2  on jumpers J1-J3 and J5-J9.
- 4) Verify  that  a  shunt  is  installed  across  pins  2-3  on jumper J4.
- 5) Connect the MINIQUSB+ interface board's P3 header to the J10 header on the EV kit.
- 6) Connect the positive terminal of the power supply to the TFT\_POWER\_IN PCB pad. Connect the negative terminal of the power supply to the PGND PCB pad.
- 7) Set the power-supply TFT\_POWER\_IN to 5V.
- 8) Turn on the power supply.
- 9) Verify that the green LED (DS1) is on.
- 10) Launch the EV kit software application.
- 11) From the  EV  kit  software  toolbar,  select Device  → Scan for Address .  The  GUI  scans  the  I 2 C  bus  for available slave addresses on the bus and selects the first  one (in this case, the MAX20067 I 2 C address). Press OK once the MAX20067 I 2 C address has been found.
- 12)  Verify  that  the  status  bar  in  the  bottom-right  corner of the GUI displays EV Kit: Connected , as shown in Figure 1.
- 13)  In the 0x02 REGULATORS CONTROL register group box, check in order: EN\_BST, EN\_AVDD , EN\_VGON , EN\_VGOFF , and click the Read All button.
- 14) In the 0x03 REGULATORS POWER STATUS (Read Only) register  group  box,  verify  that  the BST\_ON , AVDD\_ON , VGON\_ON , VGOFF\_ON ,  and VCOM\_ ON indicators are green.
- 15) For more details on how to use the GUI and all the features available, click on the GUI Help menu item.

## MAX20067 Evaluation Kit/ MAX20067 Evaluation System

Figure 1. MAX20067 Evaluation Kit Software (GUI)

<!-- image -->

## MAX20067 Evaluation Kit/ MAX20067 Evaluation System

## Detailed Description of Hardware

## Jumper Settings

Several  jumper  settings  in  the  following  tables  illustrate features of the MAX20067 EV kit.

## Digital Domain Voltage (J1)

The EV kit exposes digital outputs (FLT, SDA, and SCL) that are referred to as the 'digital domain voltage.'

Digital  domain  voltage  can  be  selected  between  the TFT\_POWER\_IN voltage and the fixed 3.3V provided by the MINQUSB+. Alternatively, you can force an external voltage as digital reference (see Table 1).

## I 2 C Slave Address (J2)

The IC's 7-bit I 2 C slave address can be selected between two options through the J2 jumper setting (see Table 2). Note: Do not leave J2 open.

## Table 1. Jumper Functions (J1)

| SHUNT POSITION   | DIGITAL DOMAIN                  |
|------------------|---------------------------------|
| 1-2*             | TFT_POWER_IN                    |
| 2-3              | 3.3V (with MINIQUSB+ connected) |
| Open             | Externally provided (J1 pin 2)  |

## Table 2. Jumper Functions (J2)

| SHUNT POSITION   | 7-BIT I 2 C SLAVE ADDRESS   |
|------------------|-----------------------------|
| 1-2*             | 0x28                        |
| 2-3              | 0x20                        |

*Default position.

## Table 3. Jumper Functions (J3)

| SHUNT POSITION   | DS1 POWER LED   |
|------------------|-----------------|
| 1-2*             | Connected       |
| Open             | Disconnected    |

*Default position.

## Evaluate: MAX20067/MAX20067B

## Power LED Enable (J3)

A  green  LED  (DS1)  is  used  to  indicate  that  the  EV  kit is  powered  on.  The  LED  can  be  disconnected  from the  power  supply,  allowing  precise  current-consumption evaluation. See Table 3 for shunt positions.

## Supply Sequencing (J4)

The IC can be used either  in  stand-alone  mode  or  I 2 C mode, selectable through jumper J4 settings. When the IC  is  used  in  stand-alone  mode,  two  different  supply sequencing options are available. Refer to the MAX20067 IC data sheet for more details on the supply sequencing options. See Table 4 for shunt positions.

## Enable (J5)

When  operating  in  stand-alone  mode,  the  IC  can  be disabled  acting  on  the  ENP  pin,  reducing  the  current consumption  at  its  minimum  value.  Furthermore,  an external digital signal can be used to enable/disable the IC (see Table 5).

## Table 4. Jumper Functions (J4)

| SHUNT POSITION   | SUPPLY SEQUENCING                      |
|------------------|----------------------------------------|
| 1-2*             | Stand-alone mode (Sequencing Option 1) |
| 2-3              | I 2 C mode                             |
| Open             | Stand-alone mode (Sequencing Option 2) |

## Table 5. Jumper Functions (J5)

| SHUNT POSITION   | MAX20067                                                 |
|------------------|----------------------------------------------------------|
| 1-2*             | Enabled                                                  |
| 2-3              | Disabled                                                 |
| Open             | Externally controlled through digital signal (J5, pin 2) |

## MAX20067 Evaluation Kit/ MAX20067 Evaluation System

## Gate-Shading Mode (J6)

The IC provides the option to delay the fall of the GATES output. The delay con be adjusted by an external capaci -tor (C1). If not required, delay can be disabled through J6 jumper setting (see Table 6). Note: Do not leave J6 open.

## VCOM Buffer Supply (J7)

The  IC  provides  a  130mA-capable  VCOM  buffer.  The VCOM buffer can be supplied directly with the switched output of the boost converter (AVDD), or through an exter -nal power source. See Table 7 for shunt positions.

## Gate-Shading Low-Level Voltage (J8)

Gate-shading low-level voltage can be set externally with a reference voltage, or the switched output of the boost converter  can  be  used  (AVDD).  See Table  8  for  shunt positions.

Table 6. Jumper Functions (J6)

| SHUNT POSITION   | GATE-SHADING MODE   |
|------------------|---------------------|
| 1-2*             | No delay            |
| 2-3              | 1.75µs              |

*Default position.

## Table 7. Jumper Functions (J7)

| SHUNT POSITION   | VCOM POWER SUPPLY                   |
|------------------|-------------------------------------|
| 1-2*             | AVDD                                |
| Open             | Externally provided (VCOMP PCB pad) |

*Default position.

## Table 8. Jumper Functions (J8)

| SHUNT POSITION   | GATE-SHADING LOW-LEVEL VOLTAGE    |
|------------------|-----------------------------------|
| 1-2*             | AVDD                              |
| Open             | Externally provided (DRN PCB pad) |

*Default position.

## Evaluate: MAX20067/MAX20067B

## Gate-Shading High-Level Voltage (J9)

Gate-shading high-level voltage can be set externally with a  reference  voltage,  or  the  output  of  the  positive-gate voltage regulator can be used (VGON). See Table 9 for shunt positions.

## Output-Voltage Selection

## Boost Converter

The EV kit's boost-converter output (HVINP and AVDD) is set to 12V by feedback resistors R10, R3, and R4. To generate output voltages other than 12V, select R10 + R3 in the 10kΩ to 50kΩ range, and select R4 according to the following equation:

<!-- formula-not-decoded -->

where V HVINP is the desired boost output voltage. When increasing  the  boost  output  voltage,  be  careful  not  to exceed the maximum allowed voltage (18V).

## Table 9. Jumper Functions (J9)

| SHUNT POSITION   | GATE-SHADING HIGH-LEVEL VOLTAGE   |
|------------------|-----------------------------------|
| 1-2*             | VGON                              |
| Open             | Externally provided (SRC PCB pad) |

*Default position.

## MAX20067 Evaluation Kit/ MAX20067 Evaluation System

## Positive-Gate Voltage Regulator

The EV kit's positive-gate voltage regulator output (VGON) is set to 16V by feedback resistors R22 and R20. To generate output voltages other than 16V, select R22 in the 10kΩ to 50kΩ range, and select R20 according to the following equation:

<!-- formula-not-decoded -->

where V VGON is  the  desired positive-gate voltage regulator  output.  When  increasing  the  positive-gate  voltage regulator output, be careful not to exceed the maximum allowed voltage (36V).

## Negative-Gate Voltage Regulator

The EV kit's negative-gate voltage regulator (VGOFF) is set to -6V by feedback resistors R12 and R21. To generate output voltages other than -6V, select R12 in the 10kΩ to 50kΩ range, and select R21 according to the following equation:

<!-- formula-not-decoded -->

where V VGOFF is the desired negative-gate voltage regulator output. When decreasing the negative-gate voltage regulator  output,  be  careful  not  to  exceed  the  minimum allowed voltage (-24V).

## Evaluate: MAX20067/MAX20067B

## VCOM Buffer

When the IC is operating in stand-alone mode, the voltage applied on the VCINH PCB pad sets the VCOM buffer output voltage. VCINH is internally biased to VCOMP/2. To generate output voltages other than VCOMP/2, select R15 in the 10kΩ to 50kΩ range, and select R16 according to the following equation:

<!-- formula-not-decoded -->

where V VCOM is the desired VCOM buffer output voltage and V VCOMP  is the VCOM buffer supply voltage.

To guarantee VCOM stability, the C6 capacitor may need to be increased to 1nF when VCOM voltage is adjusted through external resistors. If the IC is used in I 2 C mode, the VCOM buffer output voltage can be adjusted through I 2 C within a range of V VCINH ± 2.5V.

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX20067EVKIT# | EV Kit    |
| MAX20067EVSYS# | EV System |

#Denotes RoHS compliant.

Note: Both the MAX20067EVKIT# and MAX20067EVSYS# are supplied in their standard configuration to evaluate the MAX20067. To evaluate the MAX20067B, it is also necessary to order the MAX20067BGTJ/V+.

The MAX20067B has a lower LXP current limit of 1A than the MAX20067, which has a LXP current limit of 2.5A. All other technical information is available on the MAX20067/ MAX20067B data sheet.

## MAX20067 Evaluation Kit/ MAX20067 Evaluation System

## MAX20067 EV Kit Bill of Materials

| REF_DES                          |   QTY | VALUE   | DNI/ DNP*   | DESCRIPTION                                                                                                    | MFG PART #                                                              | MFG                               |
|----------------------------------|-------|---------|-------------|----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|-----------------------------------|
| C1                               |     1 | 100PF   | -           | CAPACITOR; SMT; 0603; CERAMIC; 100pF; 50V; 10%; X7R; -55degC to + 125degC; +/-15% from -55degC to +125degC     | C0603C101J5RAC                                                          | KEMET                             |
| C2, C4, C5, C7, C27              |     5 | 10UF    | -           | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R    | CL10B106MQ8NRN                                                          | SAMSUNG ELECTRONICS               |
| C3                               |     1 | 1UF     | -           | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                        | C1608X5R1E105M                                                          | TDK                               |
| C6, C11                          |     2 | 100PF   | -           | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                     | 0603YC101KAT2A                                                          | AVX                               |
| C8                               |     1 | 4.7UF   | -           | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R              | C2012X5R1H475K125AB                                                     | TDK                               |
| C9, C10, C15, C19, C22, C24, C28 |     7 | 0.1UF   | -           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                    | GRM188R72A104KA35; CC0603KRX7R0BB104                                    | MURATA; TDK                       |
| C12, C25                         |     2 | 2.2UF   | -           | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                      | GRM188R61H225KE11                                                       | MURATA                            |
| C13                              |     1 | 0.01UF  | -           | CAPACITOR; SMT; 0603; CERAMIC; 0.01uF; 50V; 10%; X7R; -55degC to + 125degC                                     | C0603C103K5RAC; GRM188R71H103K;C0603 X7R500-103KNE                      | KEMET/MURATA/V ENKEL LTD.         |
| C14, C18, C29, C31               |     4 | 0.1UF   | -           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 10V; TOL=10%; MODEL=C0603 SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R | C0603C104K8RAC                                                          | KEMET                             |
| C16, C23                         |     2 | 1UF     | -           | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; MODEL=_MK SERIES; TG=-55 DEGC TO +85 DEGC              | UMK107BJ105KA-T; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL | TAIYO YUDEN; TDK; SAMSUNG; MURATA |
| C17                              |     1 | 10UF    | -           | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 25V; TOL=20%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R;             | C1210C106M3RAC; GRM32DR71E106M; C3225X7R1E106M250AC                     | KEMET; MURATA; TDK                |
| C20                              |     1 | 0.022UF | -           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.022UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R | GRM188R71E223K                                                          | MURATA                            |
| C21                              |     1 | 1UF     | -           | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                       | GRM188R71E105KA12D; CGA3E1X7R1E105K; TMK107B7105KA; 06033C105KAT2A      | MURATA; TDK; TAIYO YUDEN; AVX     |
| C26                              |     0 | 100PF   | DNP         | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                     | 0603YC101KAT2A                                                          | AVX                               |
| C30                              |     0 | 2.2UF   | DNP         | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                      | GRM188R61H225KE11                                                       | MURATA                            |
| C35                              |     1 | 0.22UF  | -           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF ; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                   | CC0603KRX7R6BB224                                                       | YAGEO                             |

Evaluate: MAX20067/MAX20067B

## MAX20067 Evaluation Kit/ MAX20067 Evaluation System

## MAX20067 EV Kit Bill of Materials (continued)

| REF_DES                                                                                                                                                                            |   QTY | VALUE          | DNI/ DNP*   | DESCRIPTION                                                                                                                | MFG PART #                     | MFG                       |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|----------------|-------------|----------------------------------------------------------------------------------------------------------------------------|--------------------------------|---------------------------|
| CTL, DRN, ENP, FLT, SCL, SDA, SRC, AGND, AVDD, PGND, VCOM, VGON, AGND1, AGND2, GATES, HVINP, PGND1, PGND2, VCINH, VCOMP, VGOFF, TFT_POWER_IN, FILTERED_AVDD, TFT_POWER_IN_FILTERED |    24 | MAXIMPAD       | -           | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                   | 9020 BUSS                      | WEICO WIRE                |
| D1-D4                                                                                                                                                                              |     4 | MMBD4148SE     | -           | DIODE; SS; SMT (SOT-23); PIV=100V; IF=0.2A                                                                                 | MMBD4148SE                     | FAIRCHILD SEMICONDUCTOR   |
| D5                                                                                                                                                                                 |     0 | MBR120VLSFT1G  | DNP         | DIODE; SCH; SMT (SOD-123LF); PIV=20V; IF=1.0A                                                                              | MBR120VLSFT1G                  | ON SEMICONDUCTOR          |
| DS1                                                                                                                                                                                |     1 | LTST-C170GKT   | -           | DIODE; LED; STANDARD; GREEN; SMT (0805); PIV=2.1V; IF=0.01A                                                                | LTST-C170GKT                   | LITE-ON ELECTRONICS INC   |
| DS2                                                                                                                                                                                |     1 | LTST-C170EKT   | -           | DIODE; LED; STANDARD; RED; SMT (0805); PIV=2.0V; IF=0.02A                                                                  | LTST-C170EKT                   | LITE-ON ELECTRONICS INC   |
| J1, J2, J4-J6                                                                                                                                                                      |     5 | PEC03SAAN      | -           | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                               | PEC03SAAN                      | SULLINS ELECTRONICS CORP. |
| J3, J7-J9                                                                                                                                                                          |     4 | PBC02SAAN      | -           | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                               | PBC02SAAN                      | SULLINS ELECTRONICS CORP. |
| J10                                                                                                                                                                                |     1 | PPTC102LJBN-RC | -           | EVKIT PART-CONNECTOR; FEMALE; TH; DOUBLE ROW; 2.54MM; RIGHT ANGLE SOLDER TAIL; MATING PIN DIA 0.76MM; RIGHT ANGLE; 20PINS; | PPTC102LJBN-RC                 | SULLINS ELECTRONICS CORP. |
| L1                                                                                                                                                                                 |     1 | 1UH            | -           | INDUCTOR; SMT; MAGNETICALLY SHIELDED FERRITE BOBBIN CORE; 1UH; TOL=+/-20%; 3.4A                                            | ELL-6SH1R0M                    | PANASONIC                 |
| L2                                                                                                                                                                                 |     1 | 10UH           | -           | INDUCTOR; SMT; FERRITE CORE; 10UH; TOL=+/-20%; 1.3A                                                                        | LPS6225-103MR                  | COILCRAFT                 |
| L3                                                                                                                                                                                 |     0 | 1UH            | DNP         | INDUCTOR; SMT (1008); CERAMIC CHIP; 1UH; TOL=+/-5%; 0.37A; -40 DEGC TO +125 DEGC                                           | 1008HS-102TJL; MDT2520- CR1R0M | COILCRAFT                 |
| R1, R2                                                                                                                                                                             |     2 | 1K             | -           | RESISTOR; 0603; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                      | CR0603-FX-1001ELF              | BOURNS                    |
| R3                                                                                                                                                                                 |     1 | 10.5K          | -           | RESISTOR; 0603; 10.5K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                  | CR0603-16W-1052FT              | VENKEL LTD.               |
| R4                                                                                                                                                                                 |     1 | 91K            | -           | RESISTOR; 0603; 91K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                     | CRCW060391K0FK                 | VISHAY DALE               |
| R5, R6, R9                                                                                                                                                                         |     3 | 10K            | -           | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                      | CRG0603F10K                    | TE CONNECTIVITY           |

Evaluate: MAX20067/MAX20067B

## MAX20067 Evaluation Kit/ MAX20067 Evaluation System

## MAX20067 EV Kit Bill of Materials (continued)

| REF_DES    |   QTY | VALUE    | DNI/ DNP*   | DESCRIPTION                                                                                                  | MFG PART #                     | MFG                      |
|------------|-------|----------|-------------|--------------------------------------------------------------------------------------------------------------|--------------------------------|--------------------------|
| R5, R6, R9 |     3 | 10K      | -           | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                        | CRG0603F10K                    | TE CONNECTIVITY          |
| R7         |     1 | 10       | -           | RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.1W; THICK FILM                                                         | ERJ-3EKF10R0                   | PANASONIC                |
| R8, R14    |     2 | 0        | -           | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                             | ANY                            | ANY                      |
| R10        |     1 | 82       | -           | RESISTOR; 0603; 82 OHM; 1%; 100PPM; 0.1W; THICK FILM                                                         | ERJ3EKF82R0                    | PANASONIC                |
| R11        |     0 | 91K      | DNP         | RESISTOR; 0603; 91K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                       | CRCW060391K0FK                 | VISHAY DALE              |
| R12        |     1 | 16K      | -           | RESISTOR; 0603; 16K OHM; 1%; 100PPM; 0.25W; THICK FILM                                                       | ERJPA3F1602                    | PANASONIC                |
| R13, R18   |     0 | 0        | DNP         | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                             | N/A                            | N/A                      |
| R15, R16   |     0 | 10K      | DNP         | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                        | CRG0603F10K                    | TE CONNECTIVITY          |
| R17        |     1 | 180      | -           | RESISTOR, 0603, 180 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                       | CRCW0603180RFK                 | VISHAY DALE              |
| R19        |     0 | 10       | DNP         | RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.1W; THICK FILM                                                         | ERJ-3EKF10R0                   | PANASONIC                |
| R20        |     1 | 200K     | -           | RESISTOR; 0603; 200K; 1%; 100PPM; 0.10W; THICK FILM                                                          | CRCW06032003FK                 | VISHAY DALE              |
| R21        |     1 | 100K     | -           | RESISTOR; 0603; 100K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                       | ERJ3EKF1003                    | PANASONIC                |
| R22        |     1 | 16.9K    | -           | RESISTOR; 0603; 16.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                     | ERJ-3EKF1692V; RC0603FR-0716K9 | PANASONIC/YAGE O PHYCOMP |
| R25, R26   |     2 | 1.5K     | -           | RESISTOR; 0603; 1.5K; 1%; 100PPM; 0.10W; THICK FILM                                                          | CRCW06031K50FK                 | VISHAY DALE              |
| U1         |     1 | MAX20067 | -           | EVKIT PART-IC; INFC; AUTOMOTIVE 3-CHANNEL DISPLAY BIAS IC WITH LINEAR REGULATOR AND I2C INTERFACE; TQFN32-EP | MAX20067                       | MAXIM                    |
| -          |     1 | -        | -           | PCB:MAX20067                                                                                                 | PCB: MAX20067                  | MAXIM                    |

TOTAL

92

*Note: DNI = DO NOT INSTALL; DNP =  DO NOT PURCHASE.

Evaluate: MAX20067/MAX20067B

## MAX20067 EV Kit Schematic

<!-- image -->

## MAX20067 Evaluation Kit/ MAX20067 Evaluation System

## MAX20067 EV Kit PCB Layouts

MAX20067 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

## Evaluate: MAX20067/MAX20067B

MAX20067 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX20067 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

## MAX20067 Evaluation Kit/ MAX20067 Evaluation System

## MAX20067 EV Kit PCB Layouts (continued)

MAX20067 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

Evaluate: MAX20067/MAX20067B

MAX20067 EV Kit PCB Layout-Bottom Layer

<!-- image -->

## MAX20067 Evaluation Kit/ MAX20067 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                  | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------|-----------------|
|                 0 | 8/17            | Initial release                                              | -               |
|                 1 | 9/20            | Added MAX20067B to the title and updated Ordering Info table | 1-13, 6         |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluate: MAX20067/MAX20067B