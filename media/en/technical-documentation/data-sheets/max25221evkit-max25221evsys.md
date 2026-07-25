<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX25220, MAX25221, MAX25221B, MAX25221C

Click here to ask an associate for production status of specific part numbers.

## MAX25221 Evaluation Kit/ MAX25221 Evaluation System

## General Description

The MAX25221 evaluation kit (EV kit) is a fully assembled  and  tested  surface-mount  PCB  used  to  evaluate MAX25221 and MAX25221B automotive 4-Channel TFTLCD Power Supply with VCOM Buffer or the MAX25220 automotive  4-Channel  TFT-LCD  Power  Supply  without VCOM. Each output rail (AVDD, NAVDD, VGON, VGOFF and VCOM) can be independently adjusted via I 2 C. The output voltage, fault protection, VCOM temperature compensation,  and  non-volatile  memory  programming.  The EV  kit  exposes  an  I 2 C  interface  which  can  operate  in conjunction with the MINIQUSB+ adapter or a third party I 2 C  master  like  a  general-purpose  microcontroller.  The EV kit also includes Windows®-compatible software that provides a simple graphical user interface (GUI) for exercising the features of the IC. The EV system includes both the EV kit and the MINIQUSB+ adapter board.

## Benefits and Features

- 2.65V to 5.5V Input Range
- Default Output Voltages
- 6.8V Output at 200mA (Boost Converter)
- -6.8V Output at -200mA (Inverting Regulator)
- 12V Output at 15mA (Positive-Charge Pump Regulator)
- -10V Output at 15mA (Negative-Charge Pump Regulator)
- -2.49V Output at 100mA (VCOM Buffer)
- The EV Kit Components Fit the 2.1MHz Frequency; for Using 420kHz, Hardware Changes Are Needed
- Spread Spectrum
- Dedicated GUI
- Full Sequencing Flexibility
- Proven PCB Layout
- Fully Assembled and Tested

## MAX25221 EV Kit Files

| FILE                    | DECRIPTION            |
|-------------------------|-----------------------|
| MAX25221GUISetupVxx.exe | Windows GUI Installer |

Windows is a registered trademark and service mark of Microsoft Corporation.

©

## Quick Start

## Required Equipment

- MAX25221 EV kit
- 2.65 to 5.5V, 3A power supply
- Voltmeter
- MINIQUSB+ interface board with USB cable
- User-supplied Windows-compatible PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. To verify board operation, follow the steps:

## Stand Alone

- Verify that shunts are installed across pins 1-2 on jumpers J1-J4 and J5 has no jumper installed.
- Connect the positive terminal of the power supply to the TFT\_POWER\_IN pad and the negative terminal to the GND1 PCB pad.
- Set the power supply TFT\_POWER\_IN at 5V.
- Turn on the power supply.
- Verify that the green LED (DS1) is on.
- Verify that the boost converter (AVDD PCB pad) is 6.8V.
- Verify that the inverting converter (NAVDD PCB pad) is -6.8V.
- Verify that the positive-gate voltage regulator (VGON PCB pad) is +12V.
- Verify that the negative-gate voltage regulator (VGOFF PCB pad) is -10V.
- Verify that the VCOM buffer (VCOM PCB pad) regulator is -2.49V. (Only for MAX25221, MAX25221B, MAX25221C)

Ordering Information appears at end of data sheet.

319-100548; Rev 2; 8/21

## MAX25221 Evaluation Kit/ MAX25221 Evaluation System

## I 2 C Mode

- Visit www.maximintegrated/evkitsoftware download the latest version of the EV kit software, MAX25221GUISetupVxx.exe.
- Install the EV kit software (GUI) on your PC by running the MAX25221GUISetupVxx.exe program.
- The EV kit software application will be installed together with the required MINIQUSB+ drivers.
- Verify that shunts are installed across pins 1-2 on jumpers J1-J3, J7, J9-J11, and J17.
- Verify that shunts are installed across pins 2-3 on jumpers J5 and J12.
- Connect the MINIQUSB+ interface board's P3 header to the J14 header on the EV kit.
- Connect the positive terminal of the power supply to the TFT\_POWER\_IN pad and the negative terminal to the GND1 PCB pad.
- Set the power supply VIN at 5V.
- Turn on the power supply.
- Verify that the green LED (DS1) is on.

## MAX250, MAX251, MAX251B, MAX251C

- Launch the EV kit software application.
- From the EV kit software toolbar, select Device → Scan for Address . Verify the ENABLE pin in the GUI is enabled. The GUI scans the I 2 C bus for available slave addresses on the bus and selects the first one (in this case, the MAX25221 I 2 C address with J5 settings: 42H). Press OK once the MAX25220/ MAX25221/MAX25221B/MAX25221C I 2 C address has been found. Figure 1, is a screen capture of MAX25221 Evaluation Kit Software (GUI).
- Verify that the status bar in the bottom-right corner of the GUI displays EV Kit: Connected .
- In the GENERAL SETTINGS group box press START button .
- In the INDICATORS SEQ\_ON and FLT\_PIN status should be green.
- All channels are turned on outputting AVDD 6.8V, NAVDD -6.8V, VGON 12V, VGOFF -10V, VCOM -2.49V.
- For more details on how to use the GUI and all the features available, click on the GUI Help menu item.

Figure 1. MAX25221 Evaluation Kit Software (GUI)

<!-- image -->

## MAX25221 Evaluation Kit/ MAX25221 Evaluation System

## Detailed Description of Hardware

## Jumper Setting

In  the  following  tables,  several  jumper  settings  illustrate features of the MAX25221 EV kit.

## Power LED Enable (J1)

A green LED (DS1) is used to indicate that the EV kit is powered on.

The LED can be disconnected from the power supply, allowing precise current-consumption evaluation (see Table 1).

## Fault LED Enable (J2)

A red LED (DS2) is used to indicate a fault condition. The LED can be disconnected from the power supply, allowing precise current-consumption evaluation (see Table 2).

## SCL Pull Up (J3)

See Table 3 for jumper functions SCL Pull Up (J3).

## Table 1. Jumper Functions (J1)

| SHUNT POSITION   | DS1 POWER LED   |
|------------------|-----------------|
| 1-2*             | Connected       |
| Open             | Disconnected    |

## Table 2. Jumper Functions (J2)

| SHUNT POSITION   | DS2 FAULT LED   |
|------------------|-----------------|
| 1-2*             | Connected       |
| Open             | Disconnected    |

## Table 3. Jumper Functions SCL Pull Up (J3)

| SHUNT POSITION   | SCL VOLTAGE PULL UP             |
|------------------|---------------------------------|
| 1-2              | On-board 1.5k Ω Pull up to DVDD |
| Open             | External Pull up                |

## Enable (J4)

The  MAX25220/MAX25221/MAX25221B/MAX25221C  IC can be disabled acting on the EN pin, reducing the current consumption to its minimum value. Furthermore, an external digital  signal  can  be  used  to  enable/disable  the  IC  (see Table 4 and Table 6).

## ADD \_SEL I 2 C Slave Address-Mode (J5)

The IC's 7-bit I 2 C slave address can be selected between two options through the J5 jumper setting (see T able 5).  Additionally, the stand-alone mode can be selected with this jumper.

## External ADD control (J6)

For future improvement.

Default condition Open.

## External Enable (J7)

The MAX25220/MAX25221/MAX25221B/MAX25221C IC  can  be  enabled  or  disabled  acting  GUI  command ENABLE\_P or external digital command (see Table 6).

## Table 4. Jumper Functions Enable (J4)

| SHUNT POSITION   | MAX25220/MAX25221/MAX25221B/ MAX25221C      |
|------------------|---------------------------------------------|
| 1-2*             | Enable                                      |
| Open**           | External control from EN loop on board edge |
| 2-3              | Disable                                     |

## Table 5. Jumper Functions (J5)

| SHUNT POSITION   | MODE 7-BIT I 2 C SLAVE ADDRESS   |
|------------------|----------------------------------|
| 1-2              | I 2 C Mode: 0x52                 |
| 2-3*             | I 2 C Mode: 0x42                 |
| Open             | Stand Alone                      |

For MAX25221B and MAX25221C only: I 2 C Mode: 0x52 read only

I 2 C Mode: 0x42 read/write only

## Table 6. Jumper Functions (J7)

| SHUNT POSITION   | MAX25220/MAX25221/MAX25221B/ MAX25221C                          |
|------------------|-----------------------------------------------------------------|
| 1-2*             | Enabled from GUI Control [ ENABLE_PIN ]                         |
| Open             | Externally controlled through digital signal (EN at board edge) |

## MAX250, MAX251, MAX251B, MAX251C

│

## MAX25221 Evaluation Kit/ MAX25221 Evaluation System

## NVM Programming (J8, J13)

The EV kit is equipped with a low voltage boost regulator able to provide the VPROG voltage (8.5V) needed for NVM programmability. The VPROG is controlled by the GUI and enabled only during burning procedure. In order to use this feature, J13 jumper must be installed and J8 can be used to select the boost circuitry input voltage (see Table 7 and Table 8).

## FLT (J9)

Allows the Fault signal FLTB to be sent to GUI or an external device (see Table 9).

## SCL (J10)

The  SCL  can  be  connected  to  MINIQUSB+  or  external device (see Table 10).

## Table 7. Jumper Functions (J8)

| SHUNT POSITION   | VPROG BOOST INPUT VOLTAGE   |
|------------------|-----------------------------|
| 1-2              | MINIQUSB+ 3.3V              |
| 2-3*             | VIN                         |

## Table 8. Jumper Functions (J13)

| SHUNT POSITION   | VPROG BOOST OUTPUT VOLTAGE   |
|------------------|------------------------------|
| 1-2*             | +8.5V power VPROG pin        |
| Open             |                              |

## Table 9. Jumper Functions (J9)

| SHUNT POSITION   | FLT SIGNAL                          |
|------------------|-------------------------------------|
| 1-2*             | MINIQUSB+ 3.3V                      |
| Open             | External Signal (FLT at board edge) |

## Table 10. Jumper Functions (J10)

| SHUNT POSITION   | SCL SIGNAL      |
|------------------|-----------------|
| 1-2*             | MINIQUSB+ 3.3V  |
| Open             | External Signal |

## SDA (J11)

The SDA could be connected to GUI or external device (see Table 11).

## Digital Domain Voltage (J12)

The EV kit exposes open-drain digital signals (FLT, SDA, and  SCL)  that  are  pulled  up  to  what  is  referred  as  the 'digital domain voltage.'

Digital domain voltage can be selected between the EV kit input voltage (VIN) and the fixed 3.3V provided by the MINIQUSB+. Alternatively, you can force an external voltage as digital reference (see Table 12).

## SDA Pull Up (J17)

See Table 13 for jumper functions SDA Pull Up (J17).

## Table 11. Jumper Functions (J11)

| SHUNT POSITION   | SDA SIGNAL      |
|------------------|-----------------|
| 1-2*             | MINIQUSB+ 3.3V  |
| Open             | External Signal |

## Table 12. Jumper Functions (J12)

| SHUNT POSITION   | DIGITAL DOMAIN                        |
|------------------|---------------------------------------|
| 1-2              | MINIQUSB+ 3.3V                        |
| 2-3*             | VIN                                   |
| Open             | Externally provided (DVDD test point) |

## Table 13. Jumper Functions SDA Pull Up (J17)

| SHUNT POSITION   | SDA VOLTAGE PULL UP            |
|------------------|--------------------------------|
| 1-2*             | On-board 1.5kΩ Pull up to DVDD |
| open             | External Pull up               |

## MAX250, MAX251, MAX251B, MAX251C

│

## MAX25221 Evaluation Kit/ MAX25221 Evaluation System

## VCOM (MAX25221/MAX25221B/MAX25221C Only)

The VCOM output voltage is programmed using I 2 C to a value between -2.49V and +1V with output peak currents between +/-120mA.

The VCOM output could operate in two different ways.

## VCOM without Temperature Compensation (see  T able 14) VCOM with Temperature Compensation

The VCOM output voltage can be compensated for temperature changes using an external or internal temperature sensors, see Table 15, Table 16, and Table 17.

For  details  of  how  to  use  the  VCOM  temperature compensation  function,  refer  to  the  sections VCOM Temperature  Compensation and VCOM  Temperature Compensation  Example in  the  MAX25220/MAX25221/ MAX25221B/MAX25221C data sheet.

## Table 14. VCOM without Temperature Compensation Registers

| REGISTER   | DESCRIPTION                                                                         | DESCRIPTION                                                                         |
|------------|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| TCOMP_EN   | TCOMP_EN' bit in the DELAYVCOM_LS Register [0X08 Bit 1]                             | [0] disables this functionality.                                                    |
| VCOM25     | Sets the VCOM value between the range define from the registers VCOMMIN and VCOMMAX | Sets the VCOM value between the range define from the registers VCOMMIN and VCOMMAX |
| VCOMMIN    | Define Minimum value of VCOM                                                        | Define Minimum value of VCOM                                                        |
| VCOMMAX    | Define Maximum value of VCOM                                                        | Define Maximum value of VCOM                                                        |

## Table 15. VCOM Temperature Compensation Setting Registers

| REGISTER   | DESCRIPTION                                                          | DESCRIPTION                                |
|------------|----------------------------------------------------------------------|--------------------------------------------|
| TCOMP_EN   | TCOMP_EN' bit in the DELAYVCOM_LSB Register [0X08 Bit 1]             | [1] Enable [0] Disable                     |
| INT_SEN    | int_sensor bit in the CONFIG register [0X07 Bit 7] select the sensor | [0] Internal Sensor [1]* External T Sensor |

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX25221EVKIT# | EV Kit    |
| MAX25221EVSYS# | EV System |

## VPROG

The  EV  kit  includes  a  Boost  converter  in  order  to  supply 8.5V 25mA for programming. To perform non-volatile programming  this  voltage  should  be  connected  to  the VPROG pin.

Verify the Jumpers status See Table 7 and Table 8.

Using the GUI send a BURN command, the VPROG\_EN connected to SHDN pin enables the Boost converter for a time of 20ms.

All values in registers 0x07 to 0x15 will be stored in nonvolatile memory.

## Table 16. VTEMP Registers

| REGISTER   | DESCRIPTION                                                                                         |
|------------|-----------------------------------------------------------------------------------------------------|
| VTEMPL     | Voltage at TEMP* pin corresponding to low-temperature breakpoint in VCOM compensation curve.        |
| VTEMP25    | Voltage at TEMP* pin at 25°C                                                                        |
| VTEMP_H1   | Voltage at TEMP pin corresponding to first high-temperature breakpoint in VCOM compensation curve.  |
| VTEMP_H2   | Voltage at TEMP pin corresponding to second high-temperature breakpoint in VCOM compensation curve. |

## Table 17. VCOM Registers

| REGISTER   | DESCRIPTION                                                                                                                                |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| VCOM_L     | Delta VCOM at the temperature corresponding to VTEMP_L. This value sets the difference between the VCOM value at 25°C and that at VTEMP_L. |
| VCOM25     | Set the VCOM value at 25°C                                                                                                                 |
| VCOM_H1    | Delta VCOM at VTEMP_H1. This value sets the difference between the VCOM value at 25°C and that at VTEMP_H1.                                |
| VCOM_H2    | Delta VCOM at VTEMP_H2. This value sets the difference between the VCOM value at VTEMP_H1 and that at VTEMP_H2.                            |

## MAX250, MAX251, MAX251B, MAX251C

│

## MAX25221 Evaluation Kit/ MAX25221 Evaluation System

## MAX250, MAX251, MAX251B, MAX251C

## MAX25221 Frequency Switch (FSW) 2.1MHz EV Kit Bill of Materials

The table below refers only to MAX25221/MAX25221B/MAX25221C FSW 2.1MHz. For MAX25221 FSW 420kHz and MAX25220 see the dedicated tables to follow.

| DESIGNATION                      | DNI/DNP   | QTY   | MFG PART #                          | MANUFACTURER                    | DESCRIPTION                                                                                    |
|----------------------------------|-----------|-------|-------------------------------------|---------------------------------|------------------------------------------------------------------------------------------------|
| C1-C3, C7, C19, C37, C38, C40    | -         | 8     | CL10B106MQ8NRN                      | SAMSUNG ELECTRONICS             | 10UF; 20%; 6.3V; X7R; CERAMIC CAPACITOR 0603                                                   |
| C4, C10, C11, C13, C21, C23, C39 | -         | 7     | GRM188R71E105KA12 CGA3E1X7R1E105K   | MURATA TDK                      | 1UF; 10%; 25V; X7R; CERAMIC CAPACITOR 0603                                                     |
| C5, C9, C12, C22, C31, C52       | -         | 6     | CC0603KRX7R0BB104 GRM188R72A104KA35 | YAGEO MURATA                    | 0.1UF; 10%; 100V; X7R; CERAMIC CAPACITOR 0603                                                  |
| C6, C8, C34, C36                 | -         | 4     | GRM188R72A223KAC4 C0603C223K1RAC    | MURATA KEMET                    | 22000PF; 10%; 100V; X7R; CERAMIC CAPACITOR 0603                                                |
| C14, C24-C26                     | -         | 4     | C0603C104K8RAC                      | KEMET                           | 0.1UF; 10%; 10V; X7R; CERAMIC CAPACITOR 0603                                                   |
| C18                              | -         | 1     | C0603C103K5RAC GRM188R71H103K       | KEMET MURATA                    | 0.01uF; 10%; 50V; X7R; CERAMIC CAPACITOR 0603                                                  |
| C27,C29                          | -         | 2     | C1210C106M3RAC GRM32DR71E106M       | KEMET MURATA                    | 10UF;20%; 25V; X7R; CERAMIC CAPACITOR 1210                                                     |
| C30                              | -         | 1     | GRM188R61H225KE11                   | MURATA                          | 2.2UF; 10%; 50V; X5R; CERAMIC CAPACITOR 0603                                                   |
| C33,C35                          | -         | 2     | CL10A105KB8NNN                      | SAMSUNG                         | 1UF; 10%; 50V; X5R; CERAMIC CAPACITOR 0603                                                     |
| C47                              | -         | 1     | GRM188R61H105KAAL C0603C100K1GAC    | MURATA KEMET                    | 10PF; 10%; 100V; COG; CERAMIC CAPACITOR 0603                                                   |
| C50, C51                         | -         | 2     | GCM31CR71A226KE02                   | MURATA                          | 22UF; 10%; 10V; X7R; CERAMIC CAPACITOR 1206                                                    |
| D3                               | -         | 1     | NRVTS245ESFT1G                      | ON SEMICONDUCTOR                | DIODE; V=45V; IF=2.0A; SOD-123FL                                                               |
| D4-D6                            | -         | 3     | BAT54S                              | FAIRCHILD SEMICONDUCTOR         | DIODE;IV=30V; IF=0.2A; SOT-23                                                                  |
| D7                               | -         | 1     | CMDSH05-4                           | CENTRAL SEMICONDUCTOR CORP      | DIODE;V=40V; IF=0.5A; SOD-323                                                                  |
| DS1                              | -         | 1     | LTST-C170GKT                        | LITE-ON ELECTRONICS INC         | DIODE LED; V=2.1V; IF=0.01A; 0805                                                              |
| DS2, DS3                         | -         | 2     | LTST-C170EKT                        | LITE-ON ELECTRONICS INC         | DIODE LED ; V=2.0V; IF=0.02A; 0805                                                             |
| J1-J3, J6, J7, J9-J11, J13, J17  | -         | 10    | PBC02SAAN                           | SULLINS ELECTRONICS CORP.       | CONNECTOR; 2PINS; STRAIGHT THROUGH HOLE; MALE                                                  |
| J4, J5, J8, J12                  | -         | 4     | PEC03SAAN                           | SULLINS ELECTRONICS CORP.       | C0NNECTOR; 3PINS; STRAIGHT THROUGH HOLE; MALE                                                  |
| J14                              | -         | 1     | 803-87-020-20-001101                | PRECI-DIP SA                    | CONNECTOR; 20PINS; DOUBLE ROW RIGHT ANGLE SOLDER TAIL ;FEMALE                                  |
| J15                              | -         | 1 1   | 61301021121                         | WURTH ELECTRONICS INC           | CONNECTOR; 10PINS;DUAL PIN HEADER STRAIGHT THROUGH HOLE; MALE                                  |
| J16 L1                           | -         |       | DF11-6DP-2DSA(24)                   | HIROSE ELECTRIC CO LTD          | CONNECTOR;STRAIGHT DOUBLE-ROW THROUGH HOLE; MALE 1UH; 20%; 10.7A; COMPOSITE SMT                |
| L2                               | -         | 1 1   | ETQ-P3M1R0YFN LQH32CN220K23         | PANASONIC MURATA                | 22UH; +/-10%; 0.25A; SHIELDED SMT                                                              |
| L3, L4                           | -         | 2     | 74437324022                         | WURTH ELECTRONICS INC           | 2.2UH; 20%; 3.25A; SHIELDED SMT                                                                |
| Q1                               | - -       | 1     | BCP5516TA                           | DIODES INCORPORATED             | TRANSISTOR; I=1A; V=60V; PD=2W; SOT-223                                                        |
| Q2                               | -         | 1     | IRLML6346                           | INTERNATIONAL RECTIFIER         | TRANSISTOR; I=2.5A; V=30V; PD =1.3W ;SOT-23                                                    |
| Q3                               | -         | 1     | BSS84                               | FAIRCHILD SEMICONDUCTOR         | MOSFET P-CHANNEL; ID=-0.13A; VDSS=-50V; PD=0.36W;SOT-23                                        |
| R1, R2, R26                      | -         | 3     | CR0603-FX-1001ELF                   | BOURNS                          | 1K OHM; 100PPM; 0.10W; RESISTOR 0603                                                           |
| R3                               | -         | 1     | CRCW06033K40FK                      | VISHAYDALE                      | 3.4K OHM; 100PPM; 0.10W; RESISTOR 0603                                                         |
| R4, R6                           | -         | 2     | CRCW06031K50FK                      | VISHAYDALE                      | 1.5K; 100PPM; 0.10W; RESISTOR 0603                                                             |
| R5                               | -         | 1     | CHPHT0603K1002FGT                   | VISHAY SFERNICE                 | 10K OHM; 100PPM; 0.0125W; RESISTOR 0603                                                        |
| R7                               | -         | 1 2   | CRCW0603330RFK RC1608J000CS         | VISHAYDALE SAMSUNG ELECTRONICS  | 330 OHM; 100PPM; 0.10W; RESISTOR 0603                                                          |
| R8, R14                          | -         | 1     |                                     | VISHAYDALE                      | 0 OHM ;5%; 0.10W; JUMPER 0603 2.4K OHM; 200PPM; 0.10W; RESISTOR                                |
| R10 R12                          | - -       | 1     | ERJ-3GEYJ242 CRCW06031K00FK         | PANASONIC                       | 0603 1K; 100PPM; 0.10W; RESISTOR 0603                                                          |
| R19                              | -         | 1     | ANY                                 | ANY                             | 0 OHM; JUMPER; 0.10W; RESISTOR 0603                                                            |
| R21, R22                         | -         | 2     | CRCW0603100KFK                      | VISHAYDALE                      | 100K; 100PPM; 0.10W; RESISTOR                                                                  |
| R23                              | -         | 1     | CRCW0603510KFK                      | VISHAYDALE                      | 0603                                                                                           |
|                                  |           |       |                                     |                                 | 510K; 100PPM; 0.10W; RESISTOR 0603                                                             |
| R24                              | -         | 1     | CRCW060386K6FK                      | VISHAYDALE                      | 86.6K OHM; 100PPM; 0.10W; RESISTOR 0603                                                        |
| R25                              | -         | 1     | CRCW060310K0FK                      | VISHAYDALE                      | 10K; 100PPM; 0.10W; RESISTOR 0603                                                              |
| RT1                              | -         | 1     | NCU18XH103F6S                       | MURATA                          | 10K; TO=+/-1%; THERMISTOR; 0603                                                                |
| U1 U2                            | -         | 1 1   | MAX25221ATJ/V+ MAX8571EUT+          | MAXIM MAXIM                     | AUTOMOTIVE 4-CHANNEL TFT-LCD POWER SUPPLYWITH VCOM HIGH-EFFICIENCYLCD BOOST WITH TRUE SHUTDOWN |
| C15, C16, C48, C49               | - DNP     | 0     | C0603YC101KAT2A                     | AVX                             | 100PF; 10%; 16V; X7R; CERAMIC CAPACITOR 0603                                                   |
|                                  | DNP       | 0     | C0603C103K5RAC GRM188R71H103K       | KEMET MURATA                    | 0.01uF; 10%; 50V; X7R; CERAMIC CAPACITOR 0603                                                  |
| C17                              |           |       | GRM188R71E105KA12;                  | MURATA                          | 1UF; 10%; 25V; X7R; CERAMIC CAPACITOR 0603                                                     |
| C20, C41, C42                    | DNP       | 0     |                                     |                                 |                                                                                                |
|                                  | DNP       |       | CGA3E1X7R1E105K;                    | TDK MURATA                      |                                                                                                |
| C28                              |           | 0     | GRM188R61H225KE11                   | YAGEO                           | 2.2UF; 10%; 50V; X7R; CERAMIC CAPACITOR 0603                                                   |
| C32                              | DNP       | 0     | CC0603KRX7R0BB104 GRM188R72A104KA35 | MURATA                          | 0.1UF; 10%; 100V; X7R; CERAMIC CAPACITOR 0603                                                  |
|                                  | DNP       |       | C1210C106M3RAC                      | KEMET                           |                                                                                                |
| C43-C46                          |           | 0     |                                     |                                 | 10UF; 20%; 25V; X7R; CERAMIC CAPACITOR 1210                                                    |
|                                  | DNP       |       | GRM32DR71E106M                      | MURATA                          | 0 OHM ;5%; 0.10W; JUMPER 0603                                                                  |
| R9, R11, R18 R28                 | DNP       | 0     | RC1608J000CS CRCW060310R0FK         | SAMSUNG ELECTRONICS; VISHAYDALE | 0 OHM ;1%; 0.10W; JUMPER 0603                                                                  |
| R15, R16, R27, R17               | DNP       | 0     |                                     | VISHAY SFERNICE                 | 10K ;100PPM; 0.0125W; RESISTOR                                                                 |
|                                  | DNP       | 0     | CHPHT0603K1002FGT                   |                                 | 0603                                                                                           |
| R20                              |           | 0     | ANY                                 | ANY                             | 0 OHM ;5%; 0.10W; JUMPER 0603                                                                  |

Note: DNI-DO NOT INSTALL (PACKOUT); DNP-DO NOT PROCURE.

## MAX25221 Evaluation Kit/ MAX25221 Evaluation System

## MAX25221 Frequency Switch 420kHz EV Kit Bill of Materials

The table below refers to the changes needed for the MAX25221, MAX25221B, MAX25221C FSW 420kHz.

| DESIGNATION      | DNI/DNP   |   QTY | MFG PART #                    | MANUFACTURER          | DESCRIPTION                                     |
|------------------|-----------|-------|-------------------------------|-----------------------|-------------------------------------------------|
| C6, C8, C34, C36 |           |     4 | GRM188R72A104KA35D            | MURATA                | 10000 PF; 10%; 50V; X7R; CERAMIC CAPACITOR 0603 |
| C43-C44          |           |     2 | C1210C106M3RAC GRM32DR71E106M | KEMET MURATA          | 10UF; 20%; 25V; X7R; CERAMIC CAPACITOR 1210     |
| L3, L4           |           |     2 | 74437346100                   | WURTH ELECTRONICS INC | INDUCTOR; SHIELDED; 10UH; 20%;3.25A             |

Note: DNI-DO NOT INSTALL (PACKOUT); DNP-DO NOT PROCURE.

## MAX25220 EV Kit Bill of Materials

For the MAX25220 EV kit refer to the MAX25221 EV kit Bill of Materials and make the necessary changes from the table below.

| DESIGNATION   | DNI/DNP   |   QTY | MFG PART #                          | MANUFACTURER        | DESCRIPTION                                           |
|---------------|-----------|-------|-------------------------------------|---------------------|-------------------------------------------------------|
| C18           | DNI       |     1 | C0603C103K5RAC GRM188R71H103K       | KEMET MURATA        | 0.01uF; 10%; 50V; X7R; CERAMIC CAPACITOR 0603         |
| C21           | DNI       |     1 | GRM188R71E105KA12 CGA3E1X7R1E105K   | MURATA TDK          | 1UF; 10%; 25V; X7R; CERAMIC CAPACITOR 0603            |
| C52           | DNI       |     1 | CC0603KRX7R0BB104 GRM188R72A104KA35 | YAGEO MURATA        | 0.1UF; 10%; 100V; X7R; CERAMIC CAPACITOR 0603         |
| Q1            | DNI       |     1 | BCP5516TA                           | DIODES INCORPORATED | TRANSISTOR; I=1A; V=60V; PD=2W; SOT-223               |
| R7            | DNI       |     1 | CRCW0603330RFK                      | VISHAY DALE         | 330 OHM; 100PPM; 0.10W; RESISTOR 0603                 |
| R8, R14       | DNI       |     2 | RC1608J000CS                        | SAMSUNG ELECTRONICS | 0 OHM;5%; 0.10W; JUMPER 0603                          |
| R10           | DNI       |     1 | ERJ-3GEYJ242                        | PANASONIC           | 2.4K OHM; 200PPM; 0.10W; RESISTOR 0603                |
| R12           | DNI       |     1 | CRCW06031K00FK                      | VISHAY DALE         | 1K; 100PPM; 0.10W; RESISTOR 0603                      |
| RT1           | DNI       |     1 | NCU18XH103F6S                       | MURATA              | 10K; TOL=+/-1%; THERMISTOR; 0603                      |
| U1            | -         |     1 | MAX25220ATJ/V+                      | MAXIM               | AUTOMOTIVE 4-CHANNEL TFT-LCD POWER SUPPLY WITHOUTVCOM |

Note: DNI-DO NOT INSTALL (PACKOUT); DNP-DO NOT PROCURE.

│

## MAX25221 EV Kit Schematic

Figure 2. MAX25221 EV Kit Schematic 1-2

<!-- image -->

## MAX25221 Evaluation Kit/ MAX25221 Evaluation System

## MAX25221 EV Kit Schematic (continued)

Figure 3. MAX25221 EV Kit Schematic 2-2

<!-- image -->

## MAX25221 Evaluation Kit/ MAX25221 Evaluation System

## MAX25221 EV Kit PCB Layouts

MAX25221 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX25221 EV Kit PCB Layout-Top Layer+

<!-- image -->

## MAX250, MAX251, MAX251B, MAX251C

MAX25221 EV Kit PCB Layout-Internal Layer2

<!-- image -->

MAX25221 EV Kit PCB Layout-Internal Layer3

<!-- image -->

│

## MAX25221 Evaluation Kit/ MAX25221 Evaluation System

## MAX25221 EV Kit PCB Layouts (continued)

MAX25221 EV Kit PCB Layout-Bottom Layer

<!-- image -->

## MAX250, MAX251, MAX251B, MAX251C

MAX25221 EV Kit PCB Layout-Bottom Components

<!-- image -->

│

## MAX25221 Evaluation Kit/ MAX25221 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                               | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 6/20            | Initial release                                                                                                                                                                                                                                                                                           | -               |
|                 1 | 12/20           | Updated part number, General Description , Benefits and Features , Stand Alone , I 2 C Mode , Enable (J4) , External Enable (J7) , Table 4, Table 5, Table 6, VCOM (MAX25221 Only) , Ordering Information , MAX25221 Frequency Switch 420kHz EV Kit Bill of Materials , MAX25220 EV Kit Bill of Materials | 1-14            |
|                 2 | 8/21            | Updated title, Quick Start , Detailed Description of Hardware , Ordering Information , Bill of Materials                                                                                                                                                                                                  | 1-3, 5-9        |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

## MAX250, MAX251, MAX251B, MAX251C