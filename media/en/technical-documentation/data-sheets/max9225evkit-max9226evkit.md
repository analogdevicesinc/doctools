<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX9225/6 Evaluation Kit

## General Description

The MAX9225/6 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that simplifies  the  evaluation of the MAX9225 10-bit, 10MHz to 20MHz serializer and the MAX9226 10-bit, 10MHz to 20MHz deserializer. The MAX9225 IC transfers 10-bit parallel 1.8V to 3.3V logic to an LCDS 2-wire serial interface. The MAX9226 IC accepts an LCDS data and converts it back to a 10-bit parallel 1.8V to 3.3V logic signal.

The MAX9225 serializer operates from a single +2.375V to  +3.465V supply and accepts +1.71V to +3.465V inputs. The MAX9226 deserializer operates from a +2.375V to +3.465V core supply and has a separate output buffer supply, allowing +1.71V to +3.465V output-high levels.

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE               |
|-------------|--------------|-----------------------|
| KEMET Corp. | 864-963-6300 | www.kemet.com         |
| Taiyo Yuden | 800-348-2496 | www.t-yuden.com       |
| TDK Corp.   | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9225/MAX9226 when contacting these component suppliers.

| DESIGNATION           |   QTY | DESCRIPTION                                                                                |
|-----------------------|-------|--------------------------------------------------------------------------------------------|
| C1, C2, C3            |     3 | 10µF ±20%, 6.3V X5R ceramic capacitors (0805) Taiyo Yuden JMK212BJ106MG TDK C2012X5R0J106M |
| C4, C5, C6            |     3 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K                           |
| C7, C8, C9            |     3 | 0.01µF ±10%, 25V X7R ceramic capacitors (0402) Kemet C0402C103K3RAC TDK C1005X7R1E103K     |
| EX_PCLKIN, POWER-DOWN |     2 | 50 Ω BNC PC board mount connectors                                                         |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                     |
|---------------|-------|-------------------------------------------------|
| J1, J2, J3    |     3 | 2 x 10-pin headers                              |
| JU1, JU4, JU5 |     3 | 2-pin headers                                   |
| JU2, JU3      |     2 | 3-pin headers                                   |
| R1, R2        |     2 | 249 Ω ±1% resistors (0402)                      |
| R3            |     0 | Not installed, short byPCtrace, resistor (0402) |
| R4            |     1 | 10k Ω ±5% resistor (0603)                       |
| R5, R6        |     2 | 49.9 Ω ±1% resistors (1206)                     |
| U1            |     1 | MAX9225ETE(16-pinTQFN,3mmx3mm)                  |
| U2            |     1 | MAX9226ETE(16-pinTQFN,3mmx3mm)                  |
| -             |     2 | Shunts                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Features

- ♦ 10-Bit Parallel I/O Interface Directly to 1.8V to 3.3V Logic
- ♦ 2-Wire Serial Interface
- ♦ Independent Evaluation of Serializer (MAX9225) and Deserializer (MAX9226)
- ♦ Low-Voltage, Low-Power Operation
- ♦ Including Flat-Flex Cable for 2-Wire Interface
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TEMP RANGE   | IC PACKAGE   |
|----------------|--------------|--------------|
| MAX9225/6EVKIT | 0°C to +70°C | 16 TQFN-EP*  |

## MAX9225/6 Evaluation Kit

## Quick Start

## Recommended Equipment

## Procedure

The MAX9225/6 EV kit is fully assembled and tested. Caution: Do not turn on the power supplies until all connections are completed.

- 1) Connect JU1 and JU4 with a two-connection, flatflex cable included with the EV kit.
- 2) Verify that there is a shunt across JU3 (pins 1-2) (power-down).
- 3) Connect the clock signal from the data generator to pin 2 of JU2 and connect the ground to pin 1 of JU2.
- 4) Connect the desired data to the 10-bit parallel inputs (see Table 3 for input bit location).
- 5) Connect the 10-bit parallel outputs to the input of the logic analyzer (see Table 3 for output bits location).
- 6) Connect the output clock signal to the logic analyzer, pin 1 of JU5.
- 7) Connect the positive of a 3.0V power supply to the VDD1 pad, and then connect the negative of the power supply to GND1.
- 8) Connect the positive of a 3.0V power supply to  the VDD2 pad, and then connect the negative of the power supply to GND2.
- 9) Connect the positive of a 3.0V power supply to the VDDO pad, and then connect the negative of the power supply to GND3.
- 10) Turn on all three power supplies, and then enable the data generator and logic analyzer.
- 11) Move the shunt on JU3 to pins 2-3 (power-up).
- 12) Compare the input signals of the serializer and the output signals of the deserializer with the logic analyzer.

## Detailed Description

The MAX9225/6 EV kit is a fully assembled and tested board that simplifies the evaluation of the MAX9225 10bit,  10MHz to 20MHz serializer and the  MAX9226 10bit,  10MHz to 20MHz deserializer. The MAX9225/ MAX9226 serializer/deserializer chipset reduces wiring by serializing 10 bits onto a single differential pair. The 2-wire serial interface uses low-current differential singling (LCDS) for low-EMI, high common-mode noise immunity, and ground-shift tolerance.

The MAX9225 serializer operates from a single +2.375V to  +3.465V supply and accepts +1.71V to +3.465V inputs. The MAX9226 deserializer operates from a +2.375V to +3.465V core supply and has a separate output buffer supply, allowing +1.71V to +3.465V output-high levels, VDDO ≤ VDD.

## Transferring Data from Serializer to Deserializer

The EV kit provides two 2-pin headers, JU1 and JU4, for transferring data from the serializer to the deserializer with a flat-flex cable. JU1 is the output of the serializer,  and  JU4  is  the  input  of  the  deserializer. The 2-pin header, JU1, provides easy connection for either using a differential probe to monitor the output or connecting a  flat-flex  cable  to  the  deserializer.  Pads  SDO+/SDOand SDI+/SDI- are provided for extra connections.

## Parallel Clock Input

The MAX9225/6 EV kit allows the MAX9225 to accept a clock from either a data generator/logic analyzer or a clock from an individual function generator, which is 50 Ω terminated, by changing jumper JU2. See Table 1 for JU2 functions. The clock and the data inputs to the MAX9225 need to be synchronized.

## Table 1. JU2 Functions

| SHUNT POSITION   | PIN PCLKIN                                        | PARALLEL CLOCK INPUT                              |
|------------------|---------------------------------------------------|---------------------------------------------------|
| Open             | Clock externally connected to pin 2 of JU2        | Using clock from a data generator/ logic analyzer |
| 2-3              | Connected to EX_PCLKIN connector, 50 Ω terminated | Using clock from a function generator             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- Three separate 3.0V, 50mA power supplies
- Data generator
- Logic analyzer

## MAX9225/6 Evaluation Kit

## Power-Down Input

The MAX9225/6 EV kit incorporates jumper JU3 to control the PWRDN pin. See Table 2 for JU3 functions. For normal operation, PCLKIN must be running before driving PWRDN high.

## Table 2. JU3 Functions

| SHUNT POSITION   | PIN PWRDN                                          | MAX9225 OPERATING MODE                                  |
|------------------|----------------------------------------------------|---------------------------------------------------------|
| 2-3              | Connect to VDD1 through a 10k Ω resistor           | Power-up mode                                           |
| 1-2              | Connect to SGND1 through R6                        | Power-down mode                                         |
| 1-2              | Connect to POWER- DOWN BNC with an external signal | The external signal levels determine the operating mode |

<!-- image -->

## Table 3. Input/Output Bit Location

| DATA BIT   | INPUT LOCATION   | OUTPUT LOCATION   |
|------------|------------------|-------------------|
| Bit 0      | J1-1             | J3-19             |
| Bit 1      | J1-3             | J3-17             |
| Bit 2      | J1-5             | J3-15             |
| Bit 3      | J1-7             | J3-13             |
| Bit 4      | J1-9             | J3-11             |
| Bit 5      | J1-11            | J3-9              |
| Bit 6      | J1-13            | J3-7              |
| Bit 7      | J1-15            | J3-5              |
| Bit 8      | J2-1             | J3-3              |
| Bit 9      | J2-3             | J3-1              |
| Clock      | Pin 2 of JU2     | Pin 1 of JU5      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9225/6 Evaluation Kit

Figure 1a. MAX9225/6 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9225/6 Evaluation Kit

<!-- image -->

Figure 1b. MAX9225/6 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9225/6 Evaluation Kit

Figure 2. MAX9225/6 EV Kit Component Placement-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9225/6 Evaluation Kit

<!-- image -->

Figure 3. MAX9225/6 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9225/6 Evaluation Kit

Figure 4. MAX9225/6 EV Kit PCB Layout-Inner Layer 2 (SGND1 and SGND2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9225/6 Evaluation Kit

<!-- image -->

Figure 5. MAX9225/6 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9225/6 Evaluation Kit

Figure 6. MAX9225/6 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1-5, 10

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600