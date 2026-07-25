<!-- lastmod 2022-08-03 -->
## MAX16137 Evaluation Kit

## General Description

The  MAX16137  evaluation  kit  (EV  kit)  is  designed  to evaluate the MAX1613700/VY+, a 1% accuracy, windowdetector supervisory reset IC with BIST (Built-In-Self-Test) capability and overvoltage fault output in an 8-pin TDFN package.  Several  test  points  are  provided  to  facilitate device  evaluation.  The  EV  kit  is  fully  assembled  and tested  over  the  automotive  temperature  range  of  -40°C and +125°C and is available with the MAX1613700/VY+ installed.

## Features

- 1.71V to 5.5V Supply Voltage Range
- Push-Button Switch to Clear OV Latch
- Proven 2-Layer 2oz Copper PCB Layout
- Automotive Temperature Range: -40°C and +125°C
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Figure 1. MAX16137EV Kit Board

<!-- image -->

Evaluates: MAX16137

## Quick Start

## Required Equipment

- MAX16137 EV kit
- 5V DC power supply (X2)
- One Digital Multimeter (DMM)
- 4-Channel Scope Oscilloscope

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  these steps to verify the board operation:

## CAUTION: Do not turn on the power supply until all connections are completed.

- 1) Verify the shunts are installed onto their respective default positions for jumper J1 (Table 1).
- 2) Connect one of the 5V power supplies between the VDD and GND terminal posts.
- 3) Connect the other 5V power supply between the VMON and GND terminal posts.
- 4) Connect the DMM between the VMON and GND posts.
- 5) Connect the channel 1 of the oscilloscope to RST , channel 2 of the oscilloscope to OV , channel 3 of the oscilloscope to CLR / BIST , and channel 4 of the oscilloscope to BIST of the EV kit.
- 6) Turn on the power supply.
- 7) Manually increase the power supply connected from VDD to GND to 5V.
- 8) Manually increase the power supply connected from VMON to GND to 3.3V. Verify the RST , OV , and CLR / BIST traces on the scope pulled up to 5V.
- 9) Slowly increase the VMON voltage while monitoring the voltage on the DMM. When the VMON reading on DMM is past 3.530V, RST and OV should assert low while CLR / BIST and BIST are pulled up to 5V pullup supply.
- 10) Slowly bring VMON voltage below 3.530V and verify RST deasserts while OV is latched low.
- 11) Push the PB switch momentarily to ground and verify OV latch is cleared. The EV kit is ready for further evaluation. Refer to the device data sheet for specifications and functional details.

<!-- image -->

## MAX16137 Evaluation Kit

## Detailed Description

The MAX16137 evaluation kit evaluates the MAX1613700/ VY+, a 1% accuracy, window-detector supervisory reset IC with BIST (Built-In-Self-Test) capability and overvoltage fault output. OV , RST , and BIST are open-drain outputs pulled up  to  VDD  with  external resistors. An optional capacitor  (C2)  provides  additional filtering  capability  for  the  monitoring  and  a  jumper  (J1) facilitates configuration of the BIST during normal operation.

## CLR / BIST Push-Button Switch

The EV kit includes a push button switch to clear the overvoltage latched output when the input exceeds the

## Table 1. NR (J1)

| JU1 SHUNT POSITION   | DESCRIPTION                                                                                                                                 |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Installed*           | V NR = VDD (through pullup resistor R1). BIST is completed without the device pulling RST low when performing BIST during normal operation. |
| Not Installed        | V NR = GND (through pulldown resistor R2). BIST is completed with device pulling RST low when performing BIST during normal operation.      |

## Component Suppliers

| SUPPLIER   | PHONE NUMBER   | WEBSITE               |
|------------|----------------|-----------------------|
| Murata     | 770-436-1300   | www.murata.com        |
| TDK        | 847-803-6100   | www.component.tdk.com |
| Panasonic  | 800-344-2112   | www.panasonic.com     |

Note:

Indicate using the MAX16137 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16137EVKIT# | EV Kit |

# Denotes RoHS

Evaluates: MAX16137

over voltage  threshold.  The  overvoltage  fault  is  clear on  the  falling  edge  of  the CLR / BIST signal.  Also,  the push-button  switch  allows  the  MAX16137  to  perform BIST  operation  during  normal  operation  with  the CLR / BIST voltage  pulled  low for more than 150µs(min). See Table 1 and the device data sheet for more details.

## NR Jumper (J1)

Jumper  (J1)  allows  the  MAX16137  to  perform  BIST either  by  pulling RST low  or  without  pulling RST low during  normal operation after power-up. See Table 1 for the jumper setting.

│

## MAX16137 EV Kit Bill of Materials

| DESIGNATION                                  |   QTY | DESCRIPTION                                                                                                          |
|----------------------------------------------|-------|----------------------------------------------------------------------------------------------------------------------|
| C1                                           |     1 | 0.1µF ±10%, 100V X7R ceramic capacitors (1206) Murata: GRM31CR72E104KW03, GRM319R72A104KA01 TDK: C3216X7R2A104K160AA |
| C2                                           |     1 | Not installed, capacitor (0603)                                                                                      |
| VDD, VMON, GND                               |     3 | 20G tinned copper bus wire from/into 'U' shaped loops (0.25in off the PCB)                                           |
| VDD, OV , RST , BIST , CLR / BIST , GND (X2) |     7 | Test points Vero Technologies                                                                                        |
| J1                                           |     1 | 2-pin headers, 0.1in centers                                                                                         |
| PB                                           |     1 | 15V, 20mA 100Ω SPST push-button switch Panasonic: EVQ-Q2K03W                                                         |
| R1-R3                                        |     1 | 10kΩ ±5% (0603)                                                                                                      |
| U1                                           |     1 | MAX1613700/VY+                                                                                                       |
| -                                            |     1 | Shunts                                                                                                               |
| -                                            |     1 | PCB: MAX16137 EVALUATION KIT                                                                                         |

│

Evaluates: MAX16137

## MAX16137 EV Kit Schematic

Figure 2. MAX16137EV Kit Schematic

<!-- image -->

## MAX16137 EV Kit PCB Layouts

Figure 3. MAX16137 EV Kit-Top Silkscreen

<!-- image -->

Figure 4. MAX16137 EV Kit-Top View

<!-- image -->

Figure 5. MAX16137 EV Kit-Bottom View

<!-- image -->

Figure 6. MAX16137 EV Kit-Bottom Silkscreen

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2 /21           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserYes the riJht to chanJe the circuitr\ and specifications without notice at an\ time.

<!-- image -->

│

Evaluates: MAX16137