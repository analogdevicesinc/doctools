<!-- lastmod 2023-04-07 -->
Evaluates: MAXQ610

## General Description

The  MAXQ610  evaluation  kit  (EV  kit)  provides  a  proven platform for conveniently evaluating the capabilities of the MAXQ610 low-power, 16-bit, RISC microcontroller targeted for  battery-powered  applications.  The  EV  kit  includes  the MAXQ610 EV kit board, which contains infrared (IR) transmit and receive devices, two RS-232 serial channels, four 8-pin  headers providing access to the processor's I/O port pins, a 5V power-supply input, and a bank of eight pushbutton switches for user input. The EV kit also includes software,  USB-to-JTAG/1-Wire ®   Adapter,  10-pin  JTAG  interface  cable,  serial  cable,  and  a  standard A-to-mini-B  USB cable  for  connecting  to  a  personal  computer.  The  EV  kit provides a complete, functional system ideal for developing and debugging applications as well as evaluating the overall capabilities of the MAXQ610 RISC processor.

## EV Kit contents

- MAXQ610 EV Kit Board
- USB-to-JTAG/1-Wire Adapter
- MAXQ610 EV Kit Resource Package
- Includes MAXQ610 Data Sheet, MAXQ ®  Family User's Guide and its MAXQ610 Supplement, Application Notes, and Example Programs Including Source Code
- A-to-Mini-B USB Cable
- Serial Cable
- JTAG Ribbon Cable

1-Wire and MAXQ are registered trademarks of Maxim Integrated Products, Inc.

19-5765; Rev 3; 10/13

## Features

- Easily Load and Debug Code Using Supplied USB-to-JTAG/1-Wire Adapter
- JTAG Interface Provides In-Application Debugging Features
- Step-by-Step Execution Tracing
- Breakpointing by Code Address, Data Memory Address, or Register Access
- Data Memory or Register Content View and Edit
- On-Board 3.3V Voltage Regulator (Single 5V Input)
- Eight User Input Pushbutton Switches
- Included Level-Shifted RS-232 Interface for Serial Ports 0 and 1
- Prototyping Area
- Included Board Schematics Provide a Convenient Reference Design

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXQ610 Evaluation Kit

## Evaluates: MAXQ610

Figure 1. MAXQ610 EV Kit Board

<!-- image -->

│

## Evaluates: MAXQ610

## MAXQ610 Evaluation Kit

Figure 2. MAXQ610 EV Kit Board Functional Layout

<!-- image -->

## Detailed Description

This EV kit must be used in conjunction with the following documents:

- MAXQ610 EV Kit Example Code
- MAXQ610 Data Sheet and User Guide
- MAXQ USB-to-JTAG/1-Wire Adapter Data Sheet and User Guide
- MAXQ610 EV Kit Data Sheet (this document)

These documents are available in the EV kit QuickView on  the  Maxim  website  at www.maximintegrated.com/ MAXQ610-KIT .

The MAXQ610 EV kit board is fully defined in the schematic (Figure 3). A short description of the major sections and functions of the board follows.

## Jumper Functions

The MAXQ610 EV kit board contains a number of jumpers to configure its operation. Table 1 describes the jumpers and their function

## Power Supply

The  MAXQ610  EV  kit  board  can  be  powered  directly using an external DC power supply applied to connector J3. A regulated 5V (±5%), 300mA, center positive, 2.5mm power  supply  is  required.  The  EV  kit  board  includes  a regulator to supply 3.3V power to its circuitry.

The  USB-to-JTAG/1-Wire Adapter  can  also  be  used  to provide  5.0V  power  to  the  EV  kit  board  (connector  P5 pin 8). This capability is enabled by installing jumper JH26 on  the  EV  kit  board.  In  this  configuration,  an  external power source should not be applied to connector J3.

│

## Evaluates: MAXQ610

## Infrared (IR) Interface

The  MAXQ610  microcontroller  provides  a  dedicated  IR timer/counter module to simplify support for IR communication. The IR timer/counter implements two pins (IRTX and IRRX) for supporting IR transmit and receive, respectively.  The  IRTX  output  pin  can  be  manipulated  high  or low using the IRTXOUT bit of the power control register (PWCN) when the IRTX function is not enabled. However, the IRTX pin has no corresponding port pin designation, so the standard port direction (PD), port output (PO), and port input (PI) control status bits are not present.

The  MAXQ610  EV  kit  board  includes  circuitry  for  both receiving  and  transmitting  IR  signals.  The  IR  source  is diode D1. Its anode is connected to the board's VDD supply through an 82Ω resistor, and its cathode is connected to the MAXQ610's IRTX pin (pin 39) when jumper JH15 is installed. The IR receiving circuitry consists of silicon PIN

## Table 1. Jumper Functions

| JUMPER   | SETTING     | EFFECT                                                                                        |
|----------|-------------|-----------------------------------------------------------------------------------------------|
| JH1      | 1-2 Closed  | Connects pin 3 (FORCEON) of the RS-232 level translator U1 to MAXQ610 pin 28 (port pin P3.5). |
| JH1      | 2-3 Closed* | Connects pin 3 (FORCEON) of the RS-232 level translator U1 to the board's VDD.                |
| JH1      | Open        | Connects pin 3 (FORCEON) to ground.                                                           |
| JH2      | 1-2 Closed  | Connects pin 4 ( FFORCEOFF ) of the RS-232 level translator U1 to MAXQ610 pin 33 (P3.6).      |
| JH2      | 2-3 Closed* | Connects pin 4 ( FORCEOFF ) of the RS-232 level translator U1 to the board's VDD.             |
| JH2      | Open        | Connects pin 4 ( FORCEOFF ) to ground.                                                        |
| JH3      | 1-2 Closed  | Connects pin 7 (T1IN) of the RS-232 level translator U1 to the board's VDD.                   |
| JH3      | 2-3 Closed* | Connects pin 7 (T1IN) of the RS-232 level translator U1 to MAXQ610 pin 5 (TX0, P0.2).         |
| JH3      | Open        | Pin 7 (T1IN) is floating.                                                                     |
| JH4      | 1-2 Closed  | Connects pin 8 (T2IN) of the RS-232 level translator U1 to the board's VDD.                   |
| JH4      | 2-3 Closed* | Connects pin 8 (T2IN) of the RS-232 level translator U1 to MAXQ610 pin 7 (TX1, P0.4).         |
| JH4      | Open        | Pin 8 (T2IN) is floating.                                                                     |
| JH5      | 1-2 Closed* | Connects the board's VDD source to U2's pin 5 (3.3V OUT).                                     |
| JH5      | 2-3 Closed  | Connects the board's VDD source to GND.                                                       |
| JH5      | Open        | VDD is floating.                                                                              |
| JH14     | Open        | Disconnects the MAXQ610's pin 38 (VDD input) from the board's VDD source.                     |
| JH14     | Closed*     | Connects the MAXQ610's pin 38 (VDD input) to the board's VDD source.                          |
| JH15     | Open        | Disconnects the board's D1 LED IR emitter from the MAXQ610's pin 39 (IRTX).                   |
| JH15     | Closed*     | Connects the board's D1 LED IR emitter to the MAXQ610's pin 39 (IRTX).                        |
| JH16     | Open        | Disconnects the board's D2 LED IR receiver amplified signal from the MAXQ610's pin 40 (IRRX). |
| JH16     | Closed*     | Connects the board's D2 LED IR receiver amplified signal to the MAXQ610's pin 40 (IRRX).      |
| JH17     | Open        | Disconnects the IR Rx enable from the MAXQ610's pin 10 (P0.7).                                |
| JH17     | Closed*     | Connects the IR Rx enable to the MAXQ610's P0.7 pin 10 (P0.7).                                |

│

## MAXQ610 Evaluation Kit

photodiode D2 and an npn bipolar transistor with biasing resistors. The photodiode D2 is intended for IR applications in the 700nm to 1100nm range, and the transistor is configured as a common emitter amplifier for the diode. Its  collector  is  connected  to  the  processor's  IRRX  pin (when  JH16  is  installed),  and  the  emitter  is  connected to the processor's P0.7 (TBB1, pin 10) pin when jumper JH17 is installed. This allows the processor's port pin to be used as an IR receiver-enable signal.

## Serial Port Interface

The  MAXQ610's  serial  ports  are  both  connected  to RS-232 level translators, and these RS-232 level signals are connected the DB9 connectors (J1 and J2). A number of jumpers are used to connect various serial signals to the  level  translator  and  configure  its  operation.  Table  1 describes these jumper functions.

Evaluates: MAXQ610

Table 1. Jumper Functions (continued)

| JUMPER   | SETTING   | EFFECT                                                                                                                     |
|----------|-----------|----------------------------------------------------------------------------------------------------------------------------|
| JH18     | Open*     | Connects pin 2 ( INVALID ) of the RS-232 level translator U1 to the MAXQ610's pin 27 (P3.4).                               |
| JH18     | Closed    | Disconnects pin 2 ( INVALID ) of the RS-232 level translator U1 from the MAXQ610's pin 27 (P3.4).                          |
| JH20     | Open      | Disconnects pin 9 (R1OUT) of the RS-232 level translator U1 from the MAXQ610's pin 3 (RX0, P0.1).                          |
| JH20     | Closed*   | Connects pin 9 (R1OUT) of the RS-232 level translator U1 to the MAXQ610's pin 3 (RX0, P0.1).                               |
| JH21     | Open      | Disconnects pin 10 (R2OUT) of the RS-232 level translator U1 from the MAXQ610's pin 6 (RX1, P0.3).                         |
| JH21     | Closed*   | Connects pin 10 (R2OUT) of the RS-232 level translator U1 to the MAXQ610's pin 6 (RX1, P0.3).                              |
| JH22     | Open      | Disconnects the board's DS1 LED cathode from the MAXQ610's pin 2 (P3.0).                                                   |
| JH22     | Closed*   | Connects the board's DS1 LED cathode to the MAXQ610's pin 2 P3.0.                                                          |
| JH23     | Open      | Disconnects the board's DS2 LED cathode from the MAXQ610's pin 4 (P3.1).                                                   |
| JH23     | Closed*   | Connects the board's DS2 LED cathode to the MAXQ610's pin 4 (P3.1).                                                        |
| JH24     | Open      | Disconnects the board's DS3 LED cathode from the MAXQ610's pin 15 (P3.2).                                                  |
| JH24     | Closed*   | Connects the board's DS3 LED cathode to the MAXQ610's pin 15 (P3.2).                                                       |
| JH25     | Open      | Disconnects the board's DS4 LED cathode from the MAXQ610's pin 16 (P3.3).                                                  |
| JH25     | Closed*   | Connects the board's DS4 LED cathode to the MAXQ610's pin 16 (P3.3).                                                       |
| JH26     | Open      | Disconnects the board's V50 source from pin 8 of the JTAG connector (VCC5).                                                |
| JH26     | Closed*   | Connects the board's V50 source to pin 8 of the JTAG connector (VCC5) allowing the JTAG connection to source the 5V power. |

* Default setting.

## User Input Pushbuttons

The  MAXQ610  EV  kit  board  provides  eight  momentary contact  switches  intended  for  user  input.  Each  switch is  connected  to  a  separate  port  pin  on  the  MAXQ610's port  1  (P1.7-P1.0)  as  illustrated  in  Table  2.  The  other side of each switch is connected to ground. Therefore, by using the weak pullup capability of the port pins, switch closure can be detected by reading a low on the normally high corresponding port pin.

## Table 2. Switch Input Connections

| PORT PIN   | SWITCH   |
|------------|----------|
| P1.0       | SW2      |
| P1.1       | SW3      |
| P1.2       | SW4      |
| P1.3       | SW5      |
| P1.4       | SW6      |
| P1.5       | SW7      |
| P1.6       | SW8      |
| P1.7       | SW9      |

│

## Evaluates: MAXQ610

## General-Purpose LEDs

The  MAXQ610  EV  kit  board  has  four  general-purpose LEDs  labeled  DS1,  DS2,  DS3,  and  DS4.  Each  anode  is connected to the board's VDD through a 100Ω resistor, and each cathode is connected to a processor port 3 pin through a jumper as specified in Table 3. By setting the related port pin as an output, each LED can be illuminated by setting the port pin output register bit (PO3.x) to a logic 0.

## JTAG Interface

A USB-to-JTAG/1-Wire Adapter (provided with the EV kit) is used to program and debug applications running on the MAXQ610 EV kit board. Refer to the MAXQ USB-to-JTAG/ 1-Wire Adapter  data  sheet  and  user's  guide  found  in  the EV kit Resource Package. Connect the 10-pin ribbon cable from the USB-to-JTAG/1-Wire Adapter's JTAG connector to connector P5 on the MAXQ610 EV kit board, being careful to note the polarity. Tools such as the Microcontroller Tool Kit  (MTK)  and  IAR's  Embedded  Workbench  have  built-in support for loading applications through the JTAG interface and  using  all  the  MAXQ610  debug  functionality  (breakpoints, register and memory reading, etc.).

## Getting Started

## IAR Embedded Workbench

IAR Embedded Workbench ®  is the primary IDE used for coding in C with the MAXQ610. The latest version of IAR can be obtained online from the MAXQ Development Tools webpage  at www.maximintegrated.com/MAXQ\_tools . IAR  offers  both  time-limited  and  size-limited  licenses  of the IDE for evaluation. Download and execute the installer. Follow the installer directions to install the software.

## Table 3. General-Purpose LED Connections

Figure 3. MAXQ USB-to-JTAG/1-Wire Adapter

| LED   | JUMPER   | PORT PIN   |
|-------|----------|------------|
| DS1   | JH22     | P3.0       |
| DS2   | JH23     | P3.1       |
| DS3   | JH24     | P3.2       |
| DS4   | JH25     | P3.3       |

<!-- image -->

IAR Embedded Workbench is a registered trademark of IAR Systems AB.

│

## Evaluates: MAXQ610

Once the software has been installed, open the application and create a new project in the current workspace. Ensure  that  the  MAXQ  Tool  chain  is  selected  from  the drop-down menu, and open a new C project with a generated main.c file (Figure 4).

To configure the project to run on the MAXQ610, select Options from the Project menu or press ALT+F7 . Select MAXQ61x from  the  drop-down  menu  and  ensure  that CLIB is  selected  under  the Library  Configuration tab (Figure 5).

Figure 4. IAR New Project Wizard

<!-- image -->

## Evaluates: MAXQ610

Figure 5. IAR Project Configuration

<!-- image -->

## Evaluates: MAXQ610

Select  the Debugger category  and  ensure  that Driver is  set  to JTAG .  Next,  select  the  J TAG subcategory and enter  in  the  appropriate COM  port for  your  USB-toJTAG/1-Wire Adapter. This  can  be  found  by  finding  the Adapter under Window's Device Manager (Figure 6).

The sample projects are included in the workspace maxq61xevkit.eww and  can  be  viewed  in  the Workspace window.  Each  project  in  the  workspace  should  be  configured  to  match  the  MAXQ610  by  following  the  above steps. The projects are now ready to be compiled, loaded, and debugged on the EV kit.

Figure 6. IAR JTAG Settings

<!-- image -->

## Evaluates: MAXQ610

## Debugging with IAR

Open the gpio project  from  the Workspace menu  and ensure  that  the  project  settings  described  above  have been  properly  configured.  To  view  the  source  code  for the  project,  simply  double  click gpio.c .  The  file isr.c is not used in this project, but contains the interrupt callback functions  for  other  projects  included  with  the  EV  kit.  To begin  debugging  the  project,  click  the Debug button  or

## MAXQ610 Evaluation Kit

press Ctrl+D . Doing so automatically compiles the source code and loads it onto the MAXQ610. The default debug settings  automatically  place  a  breakpoint  at  the  main function (Figure 7).

From here, you can step through the program using the functions on the Debug toolbar. To set more breakpoints throughout the code, double-click in the margin to the left of the line where you want the program to break (Figure 8).

Figure 7. IAR Debugging

<!-- image -->

Figure 8. IAR Breakpoints

<!-- image -->

│

## Evaluates: MAXQ610

The gpio example uses a timer on the MAXQ610 to blink four LEDs. The first four pins of Port 3 are wired to these LEDs, and can be manipulated by the software. By shifting the mask variable, the position of the high bit moves through the mask to the bit for each LED (Figure 6). The PD3 register controls the direction of the pins on Port 3. Setting these bits to one configures them for output and allows the voltage to be driven low to turn on the LED.

A timer in the MAXQ610 is then used to control the blink rate of the LEDs. The timer is initialized to count at a constant rate (Sysclk/256) from 0 up to 0xB71B. The default Sysclk  is  12MHz,  making  the  timer  raise  its  flag  every second (Figure 9).

## MAXQ610 Evaluation Kit

In the blinkLED() function, the mask is used to toggle one of the LEDs count number of times. Setting the bits of the P03 register to zero turns on the LED. Raising the bits to one turns off the LED (Figure 10).

IAR allows the user to view variable and register values while  debugging.  To  watch  a  register  or  variable,  rightclick on the expression and select Add to Watch . When execution  has  been  halted  by  breakpoint  or  pressing the Break button, these values are updated and can be changed by the user (Figure 11). Registers can also be viewed by selecting the View menu and clicking Register .

```
Timer0 init: Init all timer 0 registers Input :None Output: TB0CN=0,TB0V=0,TB0C =0,TB0R =0xB71B //==== void Timer0_init (void) TBOV = TBOC = 0; TB0CN = 0x400; // Divide Sysclk by 256 TB0R = 0xB71B; // Every 1 second vhen Sysclk = 12Mhz
```

Figure 9. Timer Initialization

│

## Evaluates: MAXQ610

Figure 10. blinkLED() Function

<!-- image -->

Figure 11. IAR Register and Watch

<!-- image -->

│

## Evaluates: MAXQ610

## MAX-IDE

MAX-IDE is the primary IDE used to program the MAXQ610 using assembly code. The latest version of MAX-IDE can be  obtained  from  the  MAXQ  Development  Tools  webpage at www.maximintegrated.com/MAXQ\_tools . Once installed, open MAX-IDE and create a new project (Figure 12).

Select MAXQ JTAG under  the Device menu  and  open the Options menu. From this menu, enter the appropriate COM port for the USB-to-JTAG/1-Wire Adapter. For the

Device Configuration File ,  locate MAXQ61x.cfg in  the EV Kit Resource Package (Figure 13).

The project is now configured for the MAXQ610. Assembly files can be added to the project and loaded onto the EV kit using the IDE. The included examples come with the project  files  inside  of  the bin directory  and  the  assembly  source  files  are  included  in  the src directory.  After configuring the project with the steps above, the debugger  is  ready  to  assemble  the  code  and  load  it  onto  the MAXQ610.

Figure 12. MAX-IDE Project

<!-- image -->

Figure 13. MAX-IDE Device Options

<!-- image -->

│

## Evaluates: MAXQ610

## Debugging with MAX-IDE

Using  MAX-IDE  to  debug  an  application  is  similar  to using IAR. Open the gpio project  in  MAX-IDE and the corresponding  source  code  should  open  with  the  project. This example is the same as the previous example, only it is written in MAXQ assembly instead of C. Once the project is open, place a breakpoint by clicking in the margin next to the Main tag. Unlike IAR, MAX-IDE does not automatically place a breakpoint at Main (Figure 14).

To start debugging, simply click the run button, and use the Debug toolbar to step through the program.

To view the different register values, click the Window menu and select Show | Registers . Doing so allows you to view the values in all of the registers and alter them when the execution is halted (Figure 15). Similarly, you can  view  and  alter  the  memory  contents  by  selecting Window | Show | Memory .

Figure 14. MAX-IDE Breakpoint

<!-- image -->

Figure 15. MAX-IDE Registers and Memory

<!-- image -->

│

## Evaluates: MAXQ610

Figure 16a. MAXQ610 EV Kit Board Schematic-MAXQ, IR, RS-232 (Sheet 1 of 2)

<!-- image -->

## Evaluates: MAXQ610

Figure 16b. MAXQ610 EV Kit Board Schematic-Pushbuttons (Sheet 2 of 2)

<!-- image -->

## Evaluates: MAXQ610

## Component List

| DESIGNATION          |   QTY | DESCRIPTION                                                         |
|----------------------|-------|---------------------------------------------------------------------|
| C1, C2, C5, C8, C11  |     5 | 0.1µF, 16V X7R ceramic capacitors (0603)                            |
| C3, C4               |     2 | Capacitors, DNI                                                     |
| C6, C7, C9, C12, C19 |     5 | 1.0µF, 16V X7R ceramic capacitors (0805)                            |
| C10                  |     1 | 0.47µF, 16V X7R ceramic capacitor (0603)                            |
| C13                  |     1 | 4.7µF, 10V X7R ceramic capacitor (0805)                             |
| C14, C15             |     2 | 2.2µF, 16V X7R ceramic capacitors (0805)                            |
| C16                  |     1 | 10,000pF, 16V X7R ceramic capacitor (0603)                          |
| C20                  |     1 | Capacitor, DNI                                                      |
| D1                   |     1 | High-power AlGaAS IR (870nm) T-1 3/4 (5mm) LED                      |
| D2                   |     1 | PIN photodiode 60°                                                  |
| D3                   |     1 | 1A, 20V Schottky diode (DO-41 case)                                 |
| D4                   |     1 | 1500W, 5.0V SMC TVS Zener Unidir                                    |
| DS1-DS4              |     4 | 660nm super red LEDs (water clear lens) (SMD 1206)                  |
| F1                   |     1 | 0.500A, 125V fast PICO-SMD fuse                                     |
| J1, J2               |     2 | Right-angle, 9-position connectors, female socket receptacle (gold) |
| J3                   |     1 | 2.5mm power jack PCB circ                                           |
| JH1-JH5              |     5 | 3-position 0.100in single-strip connectors                          |
| JH14-JH18, JH20-JH26 |    12 | 2-position 0.100in single-strip connectors                          |
| L1                   |     1 | 15µH SMD power inductor                                             |
| P1-P4                |     4 | 8-position 0.100in single-strip connectors                          |

## MAXQ610 Evaluation Kit

| DESIGNATION   | QTY   | DESCRIPTION                                                                                                  |
|---------------|-------|--------------------------------------------------------------------------------------------------------------|
| P5            | 1     | 10-position 0.100in dual-strip connector                                                                     |
| Q1            | 1     | General-purpose small-signal npn transistor (40V, 200mATO-92)                                                |
| R1            | 1     | 82Ω ±5%, 1/4W SMD resistor (1206)                                                                            |
| R2            | 1     | 3.32kΩ ±1%, 1/10W SMD resistor (0603)                                                                        |
| R3            | 1     | 10kΩ ±1%, 1/10W SMD resistor (0603)                                                                          |
| R4            | 1     | 1.0Ω ±1%, 1/10W SMD resistor (0603)                                                                          |
| R5, R6        | 2     | 1.0MΩ ±1%, 1/10W SMD resistors (0603)                                                                        |
| R13-R17       | 4     | 100Ω ±1%, 1/10W SMD resistors (0603)                                                                         |
| SW1-SW9       | 9     | SPST normally open pushbutton switches                                                                       |
| TP1-TP14      | 14    | Multipurpose white PC test points                                                                            |
| U1            | 1     | 1µA supply current, 1.8V to 4.25V powered RS- 232 transceiver with AutoShutdown™ (20 SSOP) Maxim MAX3218CAP+ |
| U2            | 1     | Low-dropout, 300mA linear regulator in SOT23 (5 SOT23) Maxim MAX8887EZK33+                                   |
| U4            | 1     | 16-bit microcontroller with infrared module (40 TQFN) Maxim MAXQ610B-0000+                                   |
| Y1            | 1     | 12.00MHz ceramic resonator with capacitor                                                                    |
| -             | -     | PCB: MAXQ610 EV KIT                                                                                          |

AutoShutdown is a trademark of Maxim Integrated Products, Inc.

│

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAXQ610-KIT# | EV Kit |

# Denotes a RoHS-compliant device that may include lead that is exempt under the RoHS requirements

Evaluates: MAXQ610

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                   | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/08           | Initial release                                                                               | -               |
|                 1 | 2/11            | Updated Features , changed 'serial' to 'USB'                                                  | 1, 4, 7         |
|                 2 | 7/13            | Changed reference of 'JTAG board' to 'USB-to-JTAG/1-Wire Adapter' per board revision change   | 1, 5, 6, 7      |
|                 3 | 10/13           | Updated Figure 1, Table 1, Component List , and schematics; added the Getting Started section | All             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications Zithout notice at any time.

│

Evaluates: MAXQ610

MAXQ610 Evaluation Kit