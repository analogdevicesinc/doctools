<!-- lastmod 2022-08-03 -->
## MAX35103EVKIT2 Evaluation Kit

## General Description

The MAX35103EVKIT2 provides an application example using the MAX35103 time-to-digital converter to measure water flow as part of an off-the-shelf residential irrigation system. The kit includes a PCB and ultrasonic transducer assembly that can be added to standard 24VAC irrigation systems to provide enhanced shut-off irrigation control.

The kit features a MAX32620 Arm ®  Cortex ® -M4 low-power MCU that executes application firmware. Debug support is provided by a 10-pin JTAG connector and a 3.3V TTL UART connector. Future Mbed™ support is provided by the included MAX32625PICO module.

The kit is designed to be inserted between a 24VAC irrigation  controller  and  an  irrigation  valve.  The  valve  and controller are optional and are not included but can easily be obtained at most home improvement retailers.

## MAX35103EVKIT2 Example Application

<!-- image -->

<!-- image -->

## Evaluates: MAX35103, MAX32620

## Benefits and Features

- Easy Evaluation of the MAX35103 in an Embedded Environment.
- Audiowell Ultrasonic DN20 Ultrasonic Transducer Assembly
- IAR Arm Development Environment Supported
- Flexible Input Power Options for Desktop or Field Development Enabled by the MAX15062

Ordering Information appears at end of data sheet.

Arm and Cortex are registered trademarks and Mbed is a trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

## MAX35103EVKIT2 Evaluation Kit

## MAX35103EVKIT2 Files

| FILE               | DESCRIPTION      |
|--------------------|------------------|
| MAX35103EVKIT2.ZIP | Firmware Package |

## Quick Start

## Required Equipment

Included:

- PCB containing the MAX35103 time-to-digital converter
- Audiowell ultrasonic DN20 transducer

Optional equipment not included:

- 24VAC irrigation controller
- 24VAC irrigation valve
- IAR-compatible Arm JTAG adapter with 10-pin Arm connector (for IAR support)
- FTDI TTL-232R-3V3 USB serial port cable or compatible (for IAR-based debug support)
- PC running terminal software
- 24V AC/DC benchtop power supply or power adapter

Figure 1. J2 Screw Terminal Pinout

<!-- image -->

Evaluates: MAX35103, MAX32620

## Procedure

The MAX35103EVKIT2 can be quickly evaluated without access to an irrigation system as follows. See Figure 1 for J2 connection details.

- 1) Connect one transducer wire pair from the transducer to the piezo up J2 screw terminals.
- 2) Connect the other transducer wire pair from the transducer to the piezo down J2 screw terminals.
- 3) Fill the ultrasonic transducer assembly with water or completely immerse the transducer in water.
- 4) Apply 9V to 24V AC or DC power to the PCB through the J2 screw terminal block. The silkscreen on the bottom of the PCB identifies the two POWER connectors.
- 5) Observe the red LED (D1) illuminate continually.
- 6) Observe the green LED (D2) blinking to indicate that the board and the water-filled transducer is operating correctly.

│

## MAX35103EVKIT2 Evaluation Kit

## Preloaded Test Firmware

The preloaded test firmware flashes the green LED (D2) when water is detected within the transducer assembly. This provides a quick, out-of-the box test to validate the PCB and the transducer.

If  the  green  LED  does  not  stay  illuminated,  then  there could  be  a  connection  problem  between  the  transducer assembly  and  the  J2  screw  terminal  or  the  transducer might  not  be  completely  filled  with  water.  Be  sure  to evacuate all air from the transducer assembly by tapping or shaking it. A small air bubble lodged against one of the piezo elements or reflectors can cause the test to fail.

The red LED (D1) should illuminate continually and indicates that power is being supplied correctly.

The IAR Arm test firmware is provided for reference in the firmware package associated with this kit.

## Hardware Description

The  PCB  depicted  in  Figure  2  features  a  number  of Maxim technologies. Power conversion is handled by the MAX15062 buck converter and MAX1963 and MAX8891 LDOs. This allows the board to accept a wide range of input power, including 24VAC power that is widely used in the residential irrigation market.

A solid state relay circuit allows efficient and reliable control  of  24VAC  solenoid-based  water  valves.  The  circuit features a Omron G3VM-61GR1 1.0A MOSFET relay.

Ultrasonic flow sensing is accomplished with the help of the help of the MAX35103 time-to-digital converter. The converter can also be used to sample an externally connected thermistor or RTD.

For debugging and system expansion, a 3.3V TTL UART header is provided.

Debugging  and  firmware  programming  can  be  accomplished using the 10-pin Arm JTAG header.

## Evaluates: MAX35103, MAX32620

Figure 2. PCB Block Diagram

<!-- image -->

Two 10-position rotary switches are provided for a simple means of configuring the example application firmware.

The  low-power  requirements  of  the  MAX32620  Arm Cortex-M4  and  the  MAX35103  allow  the  board  to  use power provided by the irrigation controller normally allocated to the water valve.

│

## MAX35103EVKIT2 Evaluation Kit

## Audiowell DN15 Ultrasonic Transducer Assembly

The MAX35103EVKI2 features the Audiowell DN15 ultrasonic  transducer  assembly.  This  is  a  low-cost  ultrasonic sensor with 3/4in NTP male connections for easy interface with standard North American residential irrigation systems.

Figure 3. Ultrasonic Transducer Assembly

<!-- image -->

## Table 1. Dimension for Figure 4

|      |   A (mm) |   B (mm) |   C (mm) |
|------|----------|----------|----------|
| DN15 |     8.25 |       62 |       12 |

│

## Example Application Firmware

The firmware package associate with the this evaluation kit  contains  example  firmware  and  the  MAX35103 API. This package can be downloaded from the Maxim website. The part number is SFW0000330A.

Figure 4. Transducer Assembly Cross Section

<!-- image -->

## MAX35103EVKIT2 Evaluation Kit

## Component List

| DESIGNATION                                                |   QTY | DESCRIPTION                                                     |
|------------------------------------------------------------|-------|-----------------------------------------------------------------|
| C1, C2, C6, C7                                             |     4 | 0.01µF 100V X7R 10% (0603) capacitors Murata GCM188R72A103KA37D |
| C3                                                         |     1 | 2.2µF 100V X7S 10% (1206) capacitor TDK C3216X7S2A225K160AB     |
| C4, C8, C9, C34                                            |     4 | 1µF 25V X5R 10% (0603) capacitors Murata GRM188R61E105KA12D     |
| C5                                                         |     1 | 10µF 10V X5R 10% (0805) capacitors Murata GRM21BR61A106KE19L    |
| C10, C11                                                   |     2 | 2.2µF 16V X5R 10% (0603) capacitors Murata GRM188R61C225KE15D   |
| C12, C14, C15, C16, C17, C18, C20, C21, C26, C31, C32, C33 |    12 | 0.1µF 50V X7R 10% (0603) capacitors Murata GRM188R71H104KA93D   |
| C22, C24, C25, C28, C29, C30                               |     6 | 12pF 50V C0G 5% (0603) capacitors Murata GRM1885C1H120JA01D     |
| C23, C27                                                   |     2 | 1000pF 50V X7R 10% (0603) capacitors Murata GRM188R71H102KA01D  |
| D1                                                         |     1 | Red LED Kingbright AP2012EC                                     |
| D2                                                         |     1 | Green LED Kingbright APT2012CGCK                                |
| J1                                                         |     1 | 10-position 1.27mm x 1.27mm header FCI 20021121-00010C4LF       |
| J2                                                         |     1 | 10-position fixed terminal block Phoenix Contact 1725737        |
| J3                                                         |     1 | 6-position 2.54mm header Molex 87898-0666                       |

Evaluates: MAX35103, MAX32620

| DESIGNATION    |   QTY | DESCRIPTION                                                 |
|----------------|-------|-------------------------------------------------------------|
| L1, L3, L4, L5 |     4 | 470Ω ferrite beads (0603) Murata BLM18PG471SN1D             |
| L2             |     1 | 33µH 30% 0.45A inductor Bourns SRN3015TA-330M               |
| R1, R2, R6     |     3 | 150Ω 0.5% 1/16W 25ppm (0603) resistors Susumu RR0816P-151-D |
| R3, R5         |     2 | 470Ω 0.5% 1/16W 25ppm (0603) resistors Susumu RR0816P-471-D |
| R4             |     1 | 1kΩ 0.5% 1/16W 25ppm (0603) resistor Susumu RR0816P-102-D   |
| R7             |     1 | 22kΩ 0.5% 1/16W 25ppm (0603) resistor Susumu RR0816P-223-D  |
| R8             |     1 | 510Ω 0.5% 1/16W 25ppm (0603) resistor Susumu RR0816P-511-D  |
| R9             |     1 | 220Ω 0.5% 1/16W 25ppm (0603) resistor Susumu RR0816P-221-D  |
| S1, S2         |     2 | 10-position coded rotary switches CTS 221AMA10R             |
| U1             |     1 | 0.5A bridge rectifier Fairchild Semiconductor MB1S          |
| U2             |     1 | Buck switching regulator Maxim MAX15062AATA+T               |
| U3             |     1 | 1.2V LDO Maxim MAX1963AEZT120+T                             |
| U4             |     1 | 1.8V LDO Maxim MAX8891EXK18+T                               |
| U5             |     1 | Arm Cortex-M4 Maxim MAX32620ICQ+                            |

│

## MAX35103EVKIT2 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                   |
|---------------|-------|-----------------------------------------------|
| U6            |     1 | Time-to-digital converter Maxim MAX35103EHJ+  |
| U7            |     1 | I/O buffer Fairchild Semiconductor NC7WZ16P6X |
| U8            |     1 | Solid-state relay Omron G3VM-61GR1            |
| U9, U13       |     2 | 40V TVS diodes STMicroelectronics SMAJ40CA-TR |

## Component Suppliers

| SUPPLIER                                 | PHONE                    | WEBSITE                |
|------------------------------------------|--------------------------|------------------------|
| Audiowell                                | +86 20 84802041          | www.audiowell.com      |
| Murata                                   | +81 75 951 9111          | www.murata.com         |
| ON Semiconductor/Fairchild Semiconductor | 011 421 33 790 2910      | www.onsemi.com         |
| STMicroelectronics                       | 1 (844) STMICRO          | www.st.com             |
| Abracon                                  | (949)546-800             | www.abracon.com        |
| ECS                                      | (913)782-7787            | www.ecsxtal.com        |
| Omron                                    | (224)520-7650            | www.omron.com          |
| CTS                                      | See website              | www.ctscorp.com        |
| Susumu                                   | (201) 461-4861           | www.susumu.co.jp       |
| Bourns                                   | (951) 781-5500 ext. 2778 | www.bourns.com         |
| Phoenix Context                          | (717) 944-1300           | www.phoenixcontact.com |
| Kingbright                               | +886 2 22499224          | www.kingbright.com     |
| FCI                                      | 1 (800) 237-2374         | www.fci.com            |
| TDK                                      | (516) 535-2600           | www.tdk.com            |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX35103EVKIT2# | EV Kit |

Evaluates: MAX35103, MAX32620

| DESIGNATION   |   QTY | DESCRIPTION                                   |
|---------------|-------|-----------------------------------------------|
| U10           |     1 | EEPROM Maxim DS28EL22Q+U                      |
| U11           |     1 | Mbed module Maxim MAX32625PICO-CO             |
| U12           |     1 | I/O voltage level shifter Maxim MAX13032EETE+ |
| X1            |     1 | 4MHz crystal Abracon ABLS-4.000MHZ-B2-T       |
| X2            |     1 | 32.768kHz crystal ECS ECS-.327-12.5-17X-C-TR  |

│

## MAX35103 EV Schematic (Power Conversion)

<!-- image -->

│

## MAX35103 EV Schematic (CPU)

<!-- image -->

│

## MAX35103 EV Schematic (Ultrasonic Sensor Interface)

<!-- image -->

│

## MAX35103 EV Schematic (I/O)

<!-- image -->

## MAX35103 EV Schematic (Mbed Module)

<!-- image -->

│

## MAX35103 EV PCB Layouts

Top Silkscreen

<!-- image -->

<!-- image -->

Bottom Silkscreen

│

## MAX35103EVKIT2 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/17           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserYes the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAX35103, MAX32620