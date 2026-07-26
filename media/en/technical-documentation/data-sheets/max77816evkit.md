<!-- lastmod 2022-08-02 -->
## MAX77816 Evaluation Kit

## General Description

The MAX77816 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) for evaluating the IC.  The  IC  is  a  high-current,  high-efficiency  buck-boost regulator targeting single-cell  Li-ion  battery-powered applications.  It  supports  a  wide  output  voltage  range from  2.60V  to  5.14V.  The  IC  allows  5A  (typ)  maximum switch current. In buck mode, the output current can go as high as 4A, and in boost mode, the maximum output current can be 3A. A unique control algorithm allows highefficiency,  outstanding  line/load  transient  response,  and seamless transition between buck and boost modes.

The IC features I 2 C-compatible serial interface. The I 2 C interface  allows  the  output  voltage  to  be  dynamically adjusted thus enabling finer control of system power con -sumption. The I 2 C interface also provides features such as enable control and device status monitoring.

The  multifunction  GPIO  pin  is  register  settable  to  five different options such as FPWM mode enable and induc -tor  peak  current-limit  selection.    These  options  provide design flexibility that allows the IC to cover a wide range of applications and use cases.

The  Maxim  Command  Module  (MINIQUSB)  can  be used  to  enable  USB-to-I 2 C  communication  between  a Windows ® -compatible PC and the EV kit. The EV kit software provides a Windows-based graphical user interface (GUI) to exercise the various features of the IC.

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

True Shutdown is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX77816

## Benefits and Features

- Buck and Boost Operation Including Seamless Transition between Buck and Boost Modes
- 2.3V to 5.5V V IN  Range
- 2.60V to 5.14V V OUT  with 20mV Step
- 3A Minimum Continuous Output Current (V INBB ≥ 3.0V, V OUTBB = 3.3V)
- Burst Current: 3.6A Minimum Output Current for 800μs (V INBB ≥ 3.0V, V OUTBB = 3.3V)
- I 2 C Serial Interface Allows Dynamic V OUT Adjustment and Provides Design Flexibility
- 97.5% Peak Efficiency
- 40µA Quiescent Current
- Safety Features Enhance Device and System Reliability
- Soft-Start
-  True Shutdown™
- Thermal Shutdown and Short-Circuit Protection
- Multifunction GPIO Pin
- MAX77816A: FPWM Mode Enable
- MAX77816B: Inductor Peak Current-Limit Selection
- MAX77816C: Output Voltage Selection
-  MAX77816D: Power-OK Indicator
- MAX77816E: Interrupt Indicator
- Small Size: 1.827mm x 2.127mm, 20-Bump WLP, 0.4mm Pitch

<!-- image -->

Figure 1. MAX77816 EV Kit Photo

<!-- image -->

## MAX77816 Evaluation Kit

## Quick Start

## Required Equipment

- MAX77816 EV kit
- MAX77816 EV kit software (GUI)
- Maxim's MINIQUSB (optional, USB cable included)
- Adjustable DC power supply capable of supplying 6V 9A
- Digital multimeters
- Electronic load capable of sinking 4A
- Oscilloscope (optional)

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold only refers to items directly from the EV kit software. Text in bold and under -lined refers to items from the Windows OS.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation.  Use  twisted  wires  of appropriate gauge (20AWG) that are as short as possible to connect the load and power sources.

- 1) Confirm all jumpers are in their default positions as indicated in Table 1.
- 2) Preset the DC power supply to 3.8V. Do not turn on the power supply until all connections are completed.
- 3) Set up the test circuit as shown in Figure 2 . Adjust the ammeters to their largest current range to minimize their series impedance. Do not allow the
4. ammeters to operate in their auto-range mode. If current readings are not required, short across the ammeters.
- 4) Turn on the power supply.
- 5) Switch JU2 to OUT1(1-2) to enable the IC. Verify that the voltage at OUTBBS is 3.4V (default output voltage setting).
- 6) Enable the electronic load and apply load current as required.
- 7) The EV kit software can be downloaded from www. maximintegrated.com/evalkitsoftware . If I 2 C control is required, install the EV kit software on to your computer by running the installation file (MAX77816GUISetup1.70605.0A.EXE). The program files are copied and a shortcut icon is created in Windows Start | Programs .
- 8) Connect the MINIQUSB to J1. Connect a USB cable from the PC to the MINIQUSB.
- 9) Start the EV kit software by opening its icon in the Start | Programs . The EV kit software main window appears. Click on Device then Connect . If connection is successful, a window displaying the message Currently connected to CMOD 'MINIQUSB' and device 'MAX77816' appears as shown in Figure 3 . Click Read and Close .
- 10)  The EV kit and GUI are now ready for use.

Figure 2. Quick Start Connection Diagram

<!-- image -->

## Evaluates: MAX77816

│

Figure 3. MAX77816 EV Kit Software Window (Connect)

<!-- image -->

## Detailed Description of Software

The  EV  kit  software  main  window  consists  of  two  tabs: Global Resources ( Figure 4 ) and Buck-Boost ( Figure 5 ).

Global Resources shows the chip identification informa -tion as well as the status of Power-OK, OCP, OVP, and thermal shutdown.

Buck-Boost provides a convenient means to control the IC, including configuring the output voltage, FPWM mode enable,  output  active  discharge,  output  OVP  threshold, ramp  up/down  slew  rate,  inductor  peak  current-limit threshold, buck-boost enable and others.

Refer to the register description section in the MAX77816 data sheet for details.

Figure 4. MAX77816 EV Kit Software Window (Global Resources Tab)

<!-- image -->

Figure 5. MAX77816 EV Kit Software Window (Buck-Boost Tab)

<!-- image -->

## MAX77816 Evaluation Kit

## Detailed Description of Hardware

Table 1 lists the MAX77816 EV kit jumpers and its associated functions.

## SDA/SCL Pullup

Pullup  resistors  on  SDA  and  SCL  can  be  provided  onboard by EV kit or externally.

- When using the MINIQUSB, the on-board pullup should be disabled by open JU5 and JU6. SCL and SDA is pulled up to 3.3V by the MINIQUSB.
- When using other communication modules, the onboard 1.8V LDO can be used as power rail. JU5 and JU6 can be short.

## Test Points

## Accurate Voltage Measurement

The  EV  kit  provides  test  points  for  accurate  measurements of  the  input  and  output  voltages.  VINS/PGND1S

## Table 1. Jumper Functions

| REFERENCE DESIGNATOR   | NODE                 | SHUNT POSITION   | FUNCTION                                                     |
|------------------------|----------------------|------------------|--------------------------------------------------------------|
| JU1                    | I 2 C Pullup Voltage | 1-2              | I 2 C pullup voltage is supplied from VSYS                   |
| JU1                    | I 2 C Pullup Voltage | 2-3*             | I 2 C pullup voltage is supplied from on-board 1.8V LDO (U2) |
| JU2                    | EN                   | 1-2*             | Connects EN to OUT1: IC is enabled                           |
| JU2                    | EN                   | 2-3              | Connects EN to GND: IC is disabled                           |
| JU3                    | GPIO                 | 1-2*             | Connects GPIO to GND: GPIO input is logic low                |
| JU3                    | GPIO                 | 1-3              | Connects a 100KΩ pullup resistor to GPIO: GPIO status output |
| JU3                    | GPIO                 | 1-4              | Connects GPIO to OUT1: GPIO input is logic high              |
| JU4                    | LDO Input            | OPEN             | Disconnects on-board LDO input                               |
| JU4                    | LDO Input            | 1-2*             | On-board LDO is supplied from VIN                            |
| JU5                    | SDAPullup            | OPEN*            | No pullup on SDAon EV kit (see SDA/SCL Pullup section)       |
| JU5                    | SDAPullup            | 1-2              | SDApin is pulled up to OUT1/VSYS through 2.2kΩ               |
| JU6                    | SCL Pullup           | OPEN*            | No pullup on SCL on EV kit (see SDA/SCL Pullup section)      |
| JU6                    | SCL Pullup           | 1-2              | SCL pin is pulled up to OUT1/VSYS through 2.2kΩ              |

Evaluates: MAX77816

and  OUTBBS/PGNDS  should  be  used  for  efficiency, regulation, and any measurements that require a higher degree of accuracy.

## Multifunction GPIO Pin

The GPIO pin can be configured to one of five different functions using the GUI (see Figure 5 ):

- Input for FPWM mode enable
- Input for inductor peak current-limit selection
- Input for output voltage selection
- Output for Power-OK (POK) indication
- Output for interrupts indication

JU3 can be used to bias the GPIO pin as shown in Table 1 and test point GPIO can be used to monitor the pin status.

│

## MAX77816 Evaluation Kit

## Component List

| PART          |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| C1            |     1 | 10μF ±5%, 6.3V X5R ceramic capacitor (0603), TDK CGB3C1X5R0J106M065AC    |
| C2, C8, C9    |     3 | 1μF ±10%, 6.3V X5R ceramic capacitor (0402), MURATAGRM155R60J105KE19     |
| C4            |     1 | 47μF ±20%, 6.3V X5R ceramic capacitor (0805), TDK C2012X5R0J476M125AC    |
| C6            |     1 | 100μF ±20%, 6.3V X5R ceramic capacitor (1210), TDK C3225X5R0J107M250AC   |
| J1            |     1 | Right angle connector, 20 pins, SULLINS ELECTRONICS CORP. PPTC102LJBN-RC |
| JU1, JU2      |     2 | Straight connector, 3 pins, SAMTEC TSW-103-07-L-S                        |
| JU3           |     1 | Straight connector, 4 pins, SAMTEC TSW-104-07-L-S                        |
| JU4, JU5, JU6 |     3 | Straight connector, 2 pins, SAMTEC TSW-102-07-T-S                        |
| L1            |     1 | 1μH ±20%, ISAT=8.7A, DCR=13.25mΩ, COILCRAFT XAL4020-102ME                |
| R1, R4        |     2 | 0kΩ, resistor (0402)                                                     |
| R2, R3        |     2 | 2.2kΩ ±1%, resistor (0402)                                               |
| R5            |     1 | 100kΩ ±1%, resistor (0402)                                               |
| U1            |     1 | BUCK-BOOST (20 WLP), MAX77816AEWP+                                       |
| U2            |     1 | Voltage regulator, MAX8511EXK18+                                         |
| -             |     1 | PCB: MAX77816 EVALUATION KIT                                             |

## Component Suppliers

| SUPPLIER                  | PHONE        | WEBSITE                     |
|---------------------------|--------------|-----------------------------|
| TDK                       | 847-803-6100 | www.comopnent.tdk.com       |
| MURATA                    | 770-436-1300 | www.murata-northamerica.com |
| TAIYO-YUDEN               | 603-669-7587 | www.t-yuden.com             |
| SULLINS ELECTRONICS CORP. | 760-774-0125 | www.sullinselectronics.com  |
| SAMTEC                    | 800-726-8329 | www.samtec.com              |
| COILCRAFT                 | 847-639-6400 | www.coilcraft.com           |

Note:

Indicate that you are using the MAX77816 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE           |
|----------------|----------------|
| MAX77816EVKIT# | EV Kit         |
| MINIQUSB+      | Command Module |

Evaluates: MAX77816

│

## MAX77816 EV Kit Schematic

<!-- image -->

## MAX77816 EV Kit PCB Layout Diagrams

MAX77816 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX77816 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX77816 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

│

## MAX77816 EV Kit PCB Layout Diagrams (continued)

MAX77816 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

MAX77816 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX77816 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                             | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------|-----------------|
|                 0 | 7/17            | Initial release                                         | -               |
|                 1 | 3/19            | Updated U1 full part number in the Component List table | 7               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77816