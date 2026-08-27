<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX1385 Evaluation Kit/Evaluation System

## General Description

The MAX1385 evaluation kit (EV kit) is an assembled and tested PCB that demonstrates the MAX1385 dual RF  LDMOS  bias  controller.  The  accompanying Windows ® 2000/XP-compatible software provides a handy user interface to exercise the features of the MAX1385.

The MAX1385 evaluation system (EV system) includes the MAX1385 EV kit, a high-speed I 2 C interface module (HSI2CMOD), and a 68HC16 microcontroller (µC) module (68HC16MODULE-DIP). Order the complete EV system for comprehensive evaluation of the MAX1385 using a PC. Order the EV kit if the 68HC16MODULEDIP module has already been purchased with a previous Maxim EV system, or for custom use in other µCbased systems.

The EV kit comes with the MAX1385 installed, but can also be used to evaluate the MAX1386.

Windows is a registered trademark of Microsoft Corp.

## MAX1385 EV System

| PART             |   QTY | DESCRIPTION                       |
|------------------|-------|-----------------------------------|
| MAX1385EVKIT+    |     1 | MAX1385 EV kit                    |
| HSI2CMOD         |     1 | High-speed I 2 C interface module |
| 68HC16MODULE-DIP |     1 | 68HC16 µC module                  |

## MAX1385 EV Kit

| DESIGNATION                              |   QTY | DESCRIPTION                                                                                  |
|------------------------------------------|-------|----------------------------------------------------------------------------------------------|
| C1, C4, C8, C10, C12, C16                |     6 | 1.0µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K                             |
| C2, C5, C9, C11, C13, C14, C15, C28, C29 |     9 | 0.1µF ±20%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104M                             |
| C2, C5, C9, C11, C13, C14, C15, C28, C29 |     9 | 0.1µF ±20%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104M 0.1µF ±10%, 16V X7R ceramic |

## Features

- ♦ Demonstrates a Simple Vgs (Temperature) Lookup Control Loop
- ♦ 68HC16 Assembly Source Code Included
- ♦ Proven PCB Layout
- ♦ Complete Evaluation System
- ♦ Data-Logging Software
- ♦ Lead(Pb)-Free and RoHS Compliant

## Ordering Information

| PART           | TYPE      | INTERFACE                          |
|----------------|-----------|------------------------------------|
| MAX1385EVKIT + | EV kit    | User-provided I 2 C interface      |
| MAX1385EVC16   | EV system | Windows PC with RS-232 serial port |

Note: The MAX1385 EV kit software is included with the MAX1385 EV kit, but is designed for use with the complete EV system. The EV system includes both the 68HC16MODULEDIP and HSI2CMOD modules and the EV kit. If the Windows software will not be used, the MAX1385 EV kit board can be purchased by itself, without the µC.

## Component Lists

## MAX1385 EV Kit (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| C3, C18       |     2 | 1.0µF ±20%, 25V X5R ceramic capacitors (0603) TDK C1608X5R1E105M                   |
| C3, C18       |     2 | 1.0µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E105K                   |
| C6, C7        |     0 | Not installed; ceramic capacitors (0603)                                           |
| C17           |     1 | 10µF ±20%, 25V X7R ceramic capacitor (1210) TDK C3225X7R1E106M                     |
| C19           |     1 | 4.7µF ±20%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J475M                   |
| C20-C23       |     4 | 100pF ±5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H101J TDK C1608C0G1H101K |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

## MAX1385 Evaluation Kit/Evaluation System

## Component Lists

## MAX1385 EV Kit (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| R5, R9        |     2 | 4.99k Ω ±1% resistors (1206)                                                     |
| R7, R8        |     2 | 0.1 Ω ±1% sense resistors (2010) IRC LRC-LR2010LF-01-R100-F DALE WSL2010R1000FEA |
| R10, R11      |     2 | 0 Ω resistors (1206)                                                             |
| R12, R13      |     2 | 100 Ω ±5% resistors (1206)                                                       |
| R14, R15      |     2 | 47 Ω ±5% resistors (1206)                                                        |
| U1            |     1 | MAX1385BETM+ (48 Thin QFN-EP, 7mm x 7mm x 0.8mm)                                 |
| U2            |     1 | MAX6126AASA25+ +2.5V voltage reference (8 SO)                                    |
| U3            |     1 | MAX1615EUK+T +28V input linear regulator (Top Mark: ABZD)                        |
| U4, U5        |     2 | npn transistors (3 SOT23) Fairchild MMBT3904 (Top Mark: 1A)                      |
| -             |    22 | Shunts                                                                           |
| -             |     1 | PCB: MAX1385EVKIT+                                                               |

## Component Suppliers

| SUPPLIER                | PHONE        | FAX            | WEBSITE               |
|-------------------------|--------------|----------------|-----------------------|
| Fairchild Semiconductor | 888-522-5372 | Local rep only | www.fairchildsemi.com |
| International Rectifier | 310-322-3331 | 310-726-8721   | www.irf.com           |
| IRC, Inc.               | 361-992-7900 | 361-992-3377   | www.irctt.com         |
| TDK Corp.               | 847-803-6100 | 847-390-4405   | www.component.tdk.com |
| Vishay/Dale             | 402-564-3131 | 402-563-6296   | www.vishay.com        |

Note: Indicate that you are using the MAX1385 when contacting these component suppliers.

## Quick Start

## Required Equipment

See Figure 1 for system connections:

- 8V, 500mA DC power supply
- 10V, 1000mA DC power supply
- MAX1385 EV system: High-speed I 2 C interface module

MAX1385 EV kit 68HC16 µC module

- A user-supplied Windows 2000/XP PC with a spare serial (COM) port
- 9-pin I/O extension cable

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION               |   QTY | DESCRIPTION                                                                                                                       |
|---------------------------|-------|-----------------------------------------------------------------------------------------------------------------------------------|
| D1                        |     1 | Red LED                                                                                                                           |
| J1                        |     1 | 20-pin, 2 x 10 right-angle female receptacle                                                                                      |
| JU0, JU1, JU2, JU10, JU11 |     5 | 3-pin headers                                                                                                                     |
| JU3-JU9, JU12-JU21        |    17 | 2-pin headers                                                                                                                     |
| L1                        |     1 | 70 Ω , 4A ferrite bead (0603) Murata BLM18SG700 TN1                                                                               |
| M1, M2                    |     2 | nFET (TO-220AB) Vds = 55V (High Vds --> Low GM) Rdson = 0.024 Ω at Vgs = 10V Id = 29A at 100°C International Rectifier IRFZ44NPBF |
| R1                        |     1 | 680 Ω ±5% resistor (0603)                                                                                                         |
| R2, R3                    |     2 | 1k Ω ±1% resistors (1206)                                                                                                         |
| R4                        |     1 | 0 Ω resistor (0603)                                                                                                               |

## MAX1385 Evaluation Kit/Evaluation System

## Procedure

The MAX1385 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power until all connections are made.

- 1) Ensure that the MAX1385 EV kit jumpers are set in accordance with Table 1.
- 2) Carefully connect the boards by aligning the 40-pin header of the HSI2CMOD with the 40-pin connector of  the  68HC16MODULE-DIP module. Gently press them together. The two boards should be flush against one another. Next, connect the MAX1385 EV kit 20-pin connector to the HSI2CMOD board.
- 3) Connect  the  8VDC  power  source  to  the 68HC16MODULE-DIP module at the terminal block located next to the ON/OFF switch, along the top edge of the module. Observe the polarity marked on the board.
- 4) Connect a cable from the computer's serial port to the  68HC16MODULE-DIP module. If using a 9-pin serial  port,  use  a  straight-through,  9-pin  female-tomale cable. If the only available serial port uses a 25-pin connector, a standard 25-pin to 9-pin adapter will be required. The EV kit software checks the modem status lines (CTS, DSR, and DCD) to confirm that the correct port has been selected.
- 5) Visit the Maxim website (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software. Install  the  MAX1385 evaluation software on your computer by launching 1385Rxx.msi. The program files  are  copied and icons are created in the Windows Start menu.
- 6) Turn on the 8VDC power supply.
- 7) Start  the  MAX1385 EV kit program by opening its icon in the Start menu.
- 8) Accept the default system parameters by clicking the Next button, as shown in Figure 2.
- 9) The software establishes communications with the 68HC16MODULE-DIP and HSI2CMOD boards. The program prompts you to connect the µC module and turn its power on. Slide SW1 to the ON position. Select the correct serial port, and click OK .  The program automatically downloads its software to the module. During connection, you will be asked to move the HSI2CMOD Rev A board's jumper JU5 shunt.
- 10) Wait until  the  software  enters Open-Loop System Checkout mode (Figure 3).
- 11) Turn on the 10V DC power supply.
- 12) Click the Start Calibration button. Successful calibration results in a total of approximately 250mA drain current.

<!-- image -->

Figure 1. MAX1385 EV Kit System Connections

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1385 Evaluation Kit/Evaluation System

Figure 2. MAX1385 EV Kit System Parameter Selection Window

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1385 Evaluation Kit/Evaluation System

Figure 3. MAX1385 EV Kit Calibration and Regulation Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluate:  MAX1385/MAX1386

## MAX1385 Evaluation Kit/Evaluation System

## Detailed Description of Software

System parameters and MAX1385 configuration settings are determined in the Step 1: System Parameter Selection tab (Figure 2). Invalid parameters are flagged with a red circle-slash-NO sign, and an error message appears at the bottom of the screen. If Channel 2 will be identical to Channel 1, click the Copy all  CH1 parameters button. Once all parameters are valid,  click  the Next button to proceed to the next screen.

Power-on the 68HC16MODULE-DIP µC and click on the Step  2:  Calibration  and  Regulation tab. Executable code is loaded into the µC, allowing access to the MAX1385 registers.

Once the µC is loaded and the MAX1385 is initialized, Open-Loop System Checkout begins. Operate the GATE1/GATE2 sliders  (Figure  3)  while  watching  the current indicator to verify that the MAX1385 is connected to the target FETs. Once the gate control, temperature, and current-measurement connections have been verified, click the Start Calibration button.

During calibration, the software enables the Vgs vs. Temperature regulation loop (though not at optimal speed), adjusting the Vgs (FINEDAC) code offset until the target drain current is reached.

Clicking the Shut Down button halts the regulation loop on the µC. Clicking the Power Up button sends the sequence 0x64&lt;- 0x0008, 0x0008 to power up the device again.

Clicking the Regulate button enables regulation on Channel 1 and/or Channel 2, depending on which was enabled back on the first screen. Clicking the Pause button disables regulation on both channels.

The Hardware  Connection tab  allows  register read/write access to the MAX1385 and also the registers of the DI2CM core inside the HSI2CMOD board.

## Keyboard Navigation

When you type on the keyboard, the system must know which control receives the keys. Press the TAB key to move the keyboard's focus from one control to the next. The focused control is indicated by a dotted outline. SHIFT+TAB moves the focus to the previously focused control. Buttons respond to the keyboard's SPACE bar. Some controls respond to the keyboard's UP and DOWN arrow keys. Activate the program's menu bar by pressing the F10 key, and then press the letter of the menu item desired. Most menu items have one letter underlined, indicating their shortcut key.

## Saving Graphs to Disk

Data in the real-time graph and in sampled data graphs may be saved to a file. Only the raw output codes are saved, but voltages may be inferred based on the reference voltage and the maximum code value.

## Ideal Vgs vs. Temperature File

A small data file describing the typical Vgs voltage over temperature to produce the desired target drain current (IDq) must be created by the user. An example file is shown in Listing 1.

Listing 1.

| ; MFGR: International Rectifier ; DEVICE: IRFZ44N ; Mean Vgs vs Temperature characteristic ; regulate at IDq = 0.125 A   | ; MFGR: International Rectifier ; DEVICE: IRFZ44N ; Mean Vgs vs Temperature characteristic ; regulate at IDq = 0.125 A   |
|--------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| ; Mean of data collected from two devices                                                                                | ; Mean of data collected from two devices                                                                                |
| ; TEMP_C,                                                                                                                | Vgs _mean                                                                                                                |
| -40.0,                                                                                                                   | 3.2470                                                                                                                   |
| -20.0,                                                                                                                   | 3.1495                                                                                                                   |
| 0.0,                                                                                                                     | 3.0550                                                                                                                   |
| 20.0,                                                                                                                    | 2.9560                                                                                                                   |
| 40.0,                                                                                                                    | 2.8565                                                                                                                   |
| 60.0,                                                                                                                    | 2.7545                                                                                                                   |
| 80.0,                                                                                                                    | 2.6475                                                                                                                   |
| 85.0,                                                                                                                    | 2.6190                                                                                                                   |

Each Vgs vs. Temperature point must be on a line by itself.

- The lines may be in any order.
- The temperature (°C) must be in the first column.
- The Vgs gate-to-source voltage (volts) must be in the second column.
- The columns may be separated by a comma.
- Spaces and tabs will be ignored.

Comments may be added to improve readability. Comments cannot be combined with data lines. The software treats the following lines as comments:

- Blank lines
- ; Lines that begin with a semicolon
- * Lines that begin with an asterisk
- / Lines that begin with a forward slash
- \ Lines that begin with a backslash

## Detailed Description of Hardware

For table-top demonstration, two MOSFETS (M1 and M2) are provided on-board, taking the place of the LDMOS FETs, which would be used in a real application. Diode-connected BJT transistors U4 and U5 sense

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1385 Evaluation Kit/Evaluation System

the temperature of each FET, while remaining electrically  isolated  by  PCB  copper layers. Capacitors C20 and C21 filter the external temperature measurements. Gate  drive  is  lowpass  filtered  by  R14/C28  and R15/C29. Kelvin-connected precision resistors R7 and R8, filtered  by  R12/C22 and R13/C23, measure drain current. Drain voltage is sensed by 6:1 resistor-dividers R9/R2 and R5/R3.

Power is provided from the HSI2CMOD board connected to J1. The digital supply connects directly to 5V through jumper JU8. On-board MAX1615 regulator U3 provides the 5V analog supply through jumper JU12 and ferrite bead L1. On-board MAX6126 voltage reference U2 drives both REFADC and REFDAC through j umpers  JU5  and  JU6.  The  MAX1385  power  is bypassed by capacitors C1-C5.

The complete evaluation system is a three-board set, with  the  68HC16MODULE-DIP  µC  driving  the

## Table 1. Jumper Settings

| JUMPER   | SIGNAL   | SHUNT POSITION   | DESCRIPTION                                                              |
|----------|----------|------------------|--------------------------------------------------------------------------|
| JU0      | A0/ CSB  | 1-2*             | A0 = DVDD                                                                |
| JU0      | A0/ CSB  | Open             | Do not use                                                               |
| JU0      | A0/ CSB  | 2-3              | A0 = DGND                                                                |
| JU1      | A1/DOUT  | 1-2*             | A1 = DVDD                                                                |
| JU1      | A1/DOUT  | Open             | Do not use                                                               |
| JU1      | A1/DOUT  | 2-3              | A1 = DGND                                                                |
| JU2      | A2       | 1-2*             | A2 = DVDD                                                                |
| JU2      | A2       | Open             | Do not use                                                               |
| JU2      | A2       | 2-3              | A2 = DGND                                                                |
| JU3      | DXP1     | 1-2*             | The on-board 2N3904 (U4) senses temperature                              |
| JU3      | DXP1     | Open             | An external temperature sensor may be connected between DXP1 and DXN1    |
| JU4      | DXP2     | 1-2*             | The on-board 2N3904 (U5) senses temperature                              |
| JU4      | DXP2     | Open             | An external temperature sensor may be connected between DXP2 and DXN2    |
| JU5      | REFADC   | 1-2*             | REFADC = +2.5V from MAX6126                                              |
| JU5      | REFADC   | Open             | REFADC = internal reference, or user-supplied external voltage reference |
| JU6      | REFDAC   | 1-2*             | REFDAC = +2.5V from MAX6126                                              |
| JU6      | REFDAC   | Open             | REFDAC = internal reference, or user-supplied external voltage reference |
| JU7      | SAFE2    | 1-2*             | SAFE2 = OPSAFE2                                                          |
| JU7      | SAFE2    | Open             | SAFE2 unconnected                                                        |
| JU8      | DVDD     | 1-2*             | DVDD = supplied from J1-1 connector                                      |
| JU8      | DVDD     | Open             | DVDD = external user-supplied power                                      |
| JU9      | SAFE1    | 1-2*             | SAFE1 = OPSAFE1                                                          |
| JU9      | SAFE1    | Open             | SAFE1 unconnected                                                        |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

HSI2CMOD board's high-speed I 2 C interface core. Refer to the HSI2CMOD data sheet for details.

## Evaluating the MAX1386

The MAX1386 may be evaluated on the same layout as the MAX1385. The only difference is that the gate gain is 4V/V instead of 2V/V. Be sure to select the MAX1386 in the Device pulldown menu, as shown in Figure 2.

## Evaluating the SPI™ Interface

The SPI interface is not supported by the MAX1385 EV kit software. However, the MAX1385 EV kit PCB layout supports the hardware. Set jumper JU11 to the 1-2 position.  The  SPI  interface  pins  use  the  same  pins  as the MAX1385's SCL, SDA, A0, and A1 pins.

SPI is a trademark of Motorola, Inc.

## MAX1385 Evaluation Kit/Evaluation System

## Table 1. Jumper Settings (continued)

| JUMPER   | SIGNAL   | SHUNT POSITION   | DESCRIPTION                                         |
|----------|----------|------------------|-----------------------------------------------------|
| JU10     | CNVST    | 1-2*             | CNVST = DVDD                                        |
| JU10     | CNVST    | Open             | CNVST = J1-15                                       |
| JU10     | CNVST    | 2-3              | CNVST = DGND                                        |
| JU11     | SEL      | 1-2              | U1-5 = DVDD = SPI interface version                 |
| JU11     | SEL      | Open             | Do not use                                          |
| JU11     | SEL      | 2-3*             | U1-5 = DGND = I 2 C interface version               |
| JU12     | AVDD     | 1-2*             | AVDD = +5V from MAX1615                             |
| JU12     | AVDD     | Open             | AVDD = external user-supplied power                 |
| JU13     | GATEVDD  | 1-2*             | GATEVDD is powered by AVDD                          |
| JU13     | GATEVDD  | Open             | GATEVDD must be provided by user                    |
| JU14     | RCS2-    | 1-2*             | Demo circuit RCS2- connection                       |
| JU14     | RCS2-    | Open             | Use external user-provided current-sense connection |
| JU15     | RCS2+    | 1-2*             | Demo circuit RCS2+ connection                       |
| JU15     | RCS2+    | Open             | Use external user-provided current-sense connection |
| JU16     | ADCIN2   | 1-2*             | Demo circuit ADCIN2 sense M2 VDRAIN / 4             |
| JU16     | ADCIN2   | Open             | Use external user-provided ADCIN2 connection        |
| JU17     | GATE2    | 1-2*             | Demo circuit M2 gate connection                     |
| JU17     | GATE2    | Open             | Connect to external user-provided FET gate          |
| JU18     | GATE1    | 1-2*             | Demo circuit M1 gate connection                     |
| JU18     | GATE1    | Open             | Connect to external user-provided FET gate          |
| JU19     | ADCIN1   | 1-2*             | Demo circuit ADCIN1 sense M1 VDRAIN / 4             |
| JU19     | ADCIN1   | Open             | Use external user-provided ADCIN1 connection        |
| JU20     | RCS1-    | 1-2*             | Demo circuit RCS1- connection                       |
| JU20     | RCS1-    | Open             | Use external user-provided current-sense connection |
| JU21     | RCS1+    | 1-2*             | Demo circuit RCS1+ connection                       |
| JU21     | RCS1+    | Open             | Use external user-provided current-sense connection |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1385 Evaluation Kit/Evaluation System

## Troubleshooting

## Unable to Communicate with MAX1385, No I 2 C Acknowledgment

The MAX1385 does not function until it receives two power-up commands at address 0x64 (shutdown register). Typical initialization command sequence is:

- 1) WriteWord(0x64, 0x0008)
- 2) WriteWord(0x64, 0x0008)

## Unable to Communicate with HSI2CMOD and/or 68HC16MODULE-DIP Boards

Ensure that adequate power-supply voltage and current  have been provided at the 68HC16MODULE-DIP module's J2 terminal block. The HSI2CMOD demands approximately 300mA of supply current at greater than 8V.

HSI2CMOD jumper JU1 should be in the 2-3 position. HSI2CMOD jumper JU5 should be unconnected (shunt on pin 1 only), until the software requests this jumper to be moved.

<!-- image -->

## No Current Measurement

GATEVDD supply must be powered, and both CS1+ and CS2+ must be greater than 5V to enable the current  measurement PGA to function. If using only one FET, disconnect the unused GATE\_ output and connect the unused CS\_+ to DVDD.

Listing 2. Basic Software Initialization Example

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1385 Evaluation Kit/Evaluation System

Figure 4. MAX1385 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1385 Evaluation Kit/Evaluation System

<!-- image -->

Figure 5. MAX1385 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1385 Evaluation Kit/Evaluation System

Figure 6. MAX1385 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1385 Evaluation Kit/Evaluation System

<!-- image -->

Figure 7. MAX1385 EV Kit PCB Layout-GND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1385 Evaluation Kit/Evaluation System

Figure 8. MAX1385 EV Kit PCB Layout-VCC Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1385 Evaluation Kit/Evaluation System

Figure 9. MAX1385 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

CARDENAS