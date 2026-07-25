<!-- lastmod 2022-08-02 -->
## General Description

The MAX9235 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that simplifies the  evaluation  of  the  MAX9235 400Mbps, 10-bit LVDS serializer and the MAX9206 400Mbps, 10-bit LVDS deserializer. The MAX9235 serializer transforms 10-bitwide parallel LVCMOS/LVTTL data into a serial highspeed, low-voltage differential signaling (LVDS) data stream. The serializer pairs with a deserializer, the MAX9206, which receives the serial output and transforms it back to 10-bit-wide parallel LVCMOS/LVTTL data.

The EV kit requires a single 3.3V supply and two reference clock inputs with a 16MHz to 40MHz range to operate. The 10-bit parallel input data is connected to a 24-pin header and the output data is sampled at a separate 24-pin header. The EV kit circuit can be modified to  isolate  and  evaluate  the  MAX9235 and MAX9206 independently.

| DESIGNATION    |   QTY | DESCRIPTION                                                        |
|----------------|-------|--------------------------------------------------------------------|
| C1, C3, C5, C8 |     4 | 10nF ±10%, 50V X5R ceramic capacitors (0603) TDK C1608X5R1H103K    |
| C2, C4, C6, C7 |     4 | 100nF ±10%, 50V X5R ceramic capacitors (0603) TDK C1608X5R1H104K   |
| C9             |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106K    |
| FB1, FB2, FB3  |     3 | 470 Ω at 100MHz, 1000mA ferrite beads (0603) Murata BLM18PG471SH1B |
| J1, J4         |     2 | 2 x 12-pin headers                                                 |

<!-- image -->

Features

- ♦ 3.3V Single Supply
- ♦ 10-Bit Parallel LVCMOS/LVTTL Interface
- ♦ Allows Common-Mode Testing
- ♦ Independent Evaluation of Serializer (MAX9235) and Deserializer (MAX9206)
- ♦ Low-Voltage, Low-Power Operation
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9235EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| J2, J3        |     2 | 50 Ω SMA PC-mount receptacles                                          |
| J5            |     1 | 2-pin header                                                           |
| JU1-JU4       |     4 | 3-pin headers                                                          |
| R1-R4, R7     |     5 | 100 Ω ±1% resistors (0603)                                             |
| R5, R6        |     2 | 49.9 Ω ±1% resistors (0603)                                            |
| TP1           |     1 | Test point                                                             |
| U1            |     1 | 10-bit LVDS serializer (16-pin thin QFN-EP*,3mmx3mm) Maxim MAX9235ETE+ |
| U2            |     1 | 10-bit LVDS deserializer (28-pin SSOP) Maxim MAX9206EAI+               |
| -             |     4 | Shunts                                                                 |
| -             |     1 | PCB: MAX9235 Evaluation Kit+                                           |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com        |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9235 or MAX9206 when contacting these component suppliers.

## MAX9235 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 3.3V DC power supply
- Two clock generators
- Data generator for LVCMOS/LVTTL 10-bit parallel signal input
- Logic analyzer or data-acquisition system or oscilloscope

## Procedure

The MAX9235 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply or enable the clock generators until all connections are completed.

- 1) Verify  that  all  shunts  are  in  their  default  positions. See Table 1 for default shunt positions.
- 2) Connect the 3.3V power supply to the +3.3V pad. Connect the ground terminal of this supply to the GND pad.
- 3) Connect the data generator to 24-pin connector J1 and set it to generate 10-bit parallel data at LVCMOS/LVTTL levels (high-level input from 2V to VCC and low-level input from 0.8V to GND). See Table 2 for input bit locations.
- 4) Connect the first clock generator to SMA connector J2 and set it for an output with a frequency of 16MHz to 40MHz. Use LVCMOS/LVTTL levels. Note that  the  TCLK SMA connector is terminated with two parallel-connected 100 Ω resistors.
- 5) Connect the second clock generator to SMA connector J3 and set it for the same frequency as the first  clock  generator. The frequency tolerance between the two clocks should not be larger than 1%. Note that the REFCLK SMA connector is terminated with two parallel-connected 100 Ω resistors.
- 6) Set the logic analyzer or data-acquisition system for LVCMOS/LVTTL level signal input.
- 7) Connect the logic analyzer or data-acquisition system or oscilloscope to the signal output 24-pin connector J4. See Table 2 for output bit locations.
- 8) Turn on the power supply.
- 9) Enable the first clock generator.
- 10) Enable the second clock generator.
- 11) Enable the data generator.
- 12) Enable the logic analyzer or data-acquisition system and begin sampling data.

## Detailed Description

The MAX9235 EV kit is a fully assembled and tested PCB that simplifies the evaluation of the MAX9235 400Mbps, 10-bit LVDS serializer and the MAX9206 400Mbps, 10-bit LVDS deserializer.

The serializer/deserializer data transfer starts with the serializer  initially  locking  onto  the  reference  clock  and then sending the serialized data to the deserializer.

A start-bit high and a stop-bit low frame the 10-bit data and function as the embedded clock edge in the serial data stream. The serial rate is the TCLK frequency times the data and appended bits. For example, if TCLK is 40MHz, the serial rate is 40 x 12 (10 + 2 bits) = 480Mbps. Since only 10 bits are from input data, the payload rate is 40 x 10 = 400Mbps.

The serializer output pins (OUT+ and OUT-) are held in high impedance when VCC is first applied and while the PLL is locking to the local reference clock. If the serializer  goes  into  high  impedance, the deserializer loses PLL lock and needs to reestablish phase lock before data transfer can resume. This is done by transmitting all zeros for at least one frame.

The EV kit requires a single 3.3V supply to operate and two reference clock inputs in the 16MHz to 40MHz range. The 10-bit parallel input data can be supplied to 24-pin header J1 with a data generator running at the same frequency as the reference clock, or the bits can be configured by manually installing shunts across header J1 pins. The output 10-bit parallel data can be sampled or individually tested at 24-pin header J4.

The first reference clock is for the serializer PLL reference. The second reference clock is for the deserializer PLL reference. The tolerance between the two references should not be larger than 1%. They can share a clock signal by a splitter. In real applications, the serializer and deserializer references may connect to a single system clock.

## Input Signal

The MAX9235 EV kit accepts 10-bit parallel data at LVCMOS/LVTTL levels (high-level input from 2V to VCC and low-level input from 0.8V to GND). The 10-bit pattern can be supplied to the EV kit by connecting a data generator to 24-pin header J1 or by connecting selected J1 pins to a high/low LVCMOS/LVTTL state. See Table 2 for input bit locations on 24-pin header J1.

## Output Signal

The MAX9235 EV kit outputs 10-bit parallel data at LVCMOS/LVTTL levels on 24-pin header J4. To sample the 10-bit pattern, connect a logic analyzer or dataacquisition system to J4. See Table 2 for the output bit locations on 24-pin header J4.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9235 Reference Clock TCLK

The MAX9235 EV kit allows the MAX9235 to accept an input clock from either a data generator/logic analyzer or an input clock from an individual function generator by changing jumper JU1. The TCLK input clock is 50 Ω terminated on the EV kit by two parallel-connected 100 Ω resistors. See Table 1 for TCLK input selections.

## Table 1. EV Kit Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                      |
|----------|------------------|----------------------------------------------------------------------------------|
| JU1      | 1-2              | TCLK connected to a clock applied on J1-22                                       |
| JU1      | 2-3*             | TCLK connected to an external clock applied on J2                                |
| JU2      | 1-2*             | Deserializer output data on RCLK rising edge                                     |
| JU2      | 2-3              | Deserializer output data on RCLK falling edge                                    |
| JU3      | 1-2*             | Deserializer in normal operation                                                 |
| JU3      | 2-3              | Deserializer in sleep mode, outputs in high-Z                                    |
| JU4      | 1-2*             | Deserializer parallel outputs enabled                                            |
| JU4      | 2-3              | Deserializer ROUT0-ROUT9 and RCLK pins in high-Z mode, LOCK pin is still working |

## Table 2. Input/Output Bit Locations

| SIGNAL      | BIT0   | BIT1   | BIT2   | BIT3   | BIT4   | BIT5   | BIT6   | BIT7   | BIT8   | BIT9   |
|-------------|--------|--------|--------|--------|--------|--------|--------|--------|--------|--------|
| Input (J1)  | J1-2   | J1-4   | J1-6   | J1-8   | J1-10  | J1-12  | J1-14  | J1-16  | J1-18  | J1-20  |
| Output (J4) | J4-1   | J4-3   | J4-5   | J4-7   | J4-9   | J4-11  | J4-13  | J4-15  | J4-17  | J4-19  |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9235 Evaluation Kit

## Jumper Settings

The MAX9235 EV kit circuit contains four jumpers that allow the user to put the serializer and deserializer into several operational modes. See Table 1 for jumper settings and EV kit operation descriptions.

## MAX9235 Evaluation Kit

Figure 1. MAX9235 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX9235 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9235 Evaluation Kit

Figure 3. MAX9235 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9235 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5