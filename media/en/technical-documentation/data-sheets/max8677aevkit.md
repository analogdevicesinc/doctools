<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX8677A evaluation kit (EV kit) demonstrates the MAX8677A dual-input charger and Smart Power Selector™ IC. The EV kit charges a single-cell Li-ion (Li+)  battery  from  a  DC  input  (AC  adapter)  or  a  USB 100mA/500mA source and provides system power from the DC input, USB input, or battery. The DC input has a resistor-adjustable current limit, while USB current input limit  is  logic  programmed to 100mA/500mA. USB suspend mode is also supported. The charge current is adjustable from 300mA to 1.5A. The system load has priority  over  the  charger so that charge current is reduced as necessary to prevent input overload. Charge current is also thermally regulated.

Smart Power Selector is a trademark of Maxim Integrated Products, Inc.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                             |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 4.7µF ±10%, 10V X5R ceramic capacitors (0805) TDK C2012X5R1A475K                                                        |
| C4            |     1 | 10µF ±10%, 16V X5R ceramic capacitor (1206) Taiyo Yuden EMK316BJ106KL                                                   |
| C5            |     1 | 0.068µF ±10%, 10V X7R ceramic capacitor (0402) TDK C1005X5R1A683K                                                       |
| C6            |     1 | 0.1µF ±10%, 10V X7R ceramic capacitor (0402) TDK C1005X5R1A683K                                                         |
| C7, C8        |     0 | Not installed, capacitors                                                                                               |
| D1-D5         |     5 | Small red LEDs Panasonic LNJ208R8ARA                                                                                    |
| J1            |     1 | USB type-AB mini jack, right-angle Molex 56579-0576                                                                     |
| JU1-JU5       |     5 | 3-pin headers 36-pin header, 0.1in centers (comes in 36-pin strips, cut to fit) Sullins PEC36SAAN Digi-Key S1012E-36-ND |

## Features

- ♦ DC Input Current Limit of 2A (EV Kit Standard Configuration)
- ♦ DC Input Current-Limit-Adjustment Range of 0.5A to 2A
- ♦ USB Current Limit of 100mA or 500mA
- ♦ Charge-Current Limit of 1A (EV Kit Standard Configuration)
- ♦ Charge-Current-Adjustment Range of 0.3A to 1.5A
- ♦ Input Current Thermal-Limit Threshold of +100°C
- ♦ 24-Pin, 4mm x 4mm Thin QFN Package

## Ordering Information

| PART           | TEMP RANGE   | IC PACKAGE              |
|----------------|--------------|-------------------------|
| MAX8677AEVKIT+ | 0°C to +70°C | 24 Thin QFN (4mm x 4mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                             |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------------|
| JU6, JU7      |     2 | 2-pin headers 36-pin header, 0.1in centers (comes in 36-pin strips, cut to fit) Sullins PEC36SAAN Digi-Key S1012E-36-ND |
| R1-R5,        |     5 | 4.7k Ω ±5% resistors (0402), lead free                                                                                  |
| R6            |     1 | 1.5k Ω ±1% resistor (0402), lead free                                                                                   |
| R7            |     1 | 3.01k Ω ±1% resistor (0402), lead free                                                                                  |
| R8, R9        |     2 | 10k Ω ±1% resistors (0402), lead free                                                                                   |
| R10           |     1 | Not installed, resistor (0402)                                                                                          |
| NTC           |     0 | Not installed, NTC thermistor (0603)                                                                                    |
| U1            |     1 | MAX8677AETG+                                                                                                            |
| -             |     5 | Shunts Sullins Electronics Corp. STC02SYAN Mouser 151-8000 or Digi-Key # S9000-ND or equivalent                         |
| -             |     1 | PCB: MAX8677A Evaluation Kit+                                                                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX8677A Evaluation Kit

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE               |
|-----------------|--------------|-----------------------|
| Kamaya Inc.     | 260-489-1533 | www.kamaya.com        |
| Mouser/Molex    | 800-346-6873 | www.mouser.com/molex  |
| Panasonic Corp. | 714-373-7366 | www.panasonic.com     |
| Taiyo Yuden     | 408-573-4150 | www.t-yuden.com       |
| TDK Corp.       | 847-803-6100 | www.component.tdk.com |
| Vishay          | 402-563-6866 | www.vishay.com        |

Note: Indicate that you are using the MAX8677A when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- Adjustable DC power supply capable of 7V at 3A
- Li+ battery or a 2A, 4.5V power supply capable of sinking current

## Procedure

The MAX8677A EV kit is fully assembled and tested. Follow the steps below to verify board operation. Use twisted wires of appropriate gauge that are as short as possible to connect the battery and power sources:

- 1) Preset the DC power supply to 5V. Turn off the power supply. Do not turn on the power supply until all connections are made.
- 2) Preset the adjustable load to 0A.
- 3) Connect the EV kit to the power supply, battery, adjustable load, and meter, as shown in Figure 1.
- 4) Ensure that the EV kit has jumper settings configured as shown in Table 1, and also shown in Figure 1.
- 5) Turn on the power supply.

Figure 1. Test Procedure Setup

<!-- image -->

## Table 1. Jumper Settings

| JUMPER   | LABEL   | DEFAULT POSITION   | NOTES                                         |
|----------|---------|--------------------|-----------------------------------------------|
| JU1      | CEN     | 2-3                | Enables charger                               |
| JU2      | PEN1    | 1-2                | Configures DC input as adapter source         |
| JU3      | PEN2    | 1-2                | 500mA setting for USB power at DC input       |
| JU4      | TSET    | Open               | 5% (1-2), 10% (open), 15% (2-3)               |
| JU5      | USUS    | 2-3                | Not in USB suspend mode                       |
| JU6      | -       | Open               | Ties THM to GND to bypass thermistor function |
| JU7      | -       | Short              | Connects V LOGIC to VL                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- Digital multimeter (DMM)
- Up to 3A adjustable load
- Three 10A ammeters

## MAX8677A Evaluation Kit

- 6) Verify that the voltage at SYS is approximately 5V.
- 7) If  VBAT is  less  than  4.05V,  verify  that  the  current from BATT+ into the battery is approximately 1A.
- 8) Increase the load current on SYS to 1A.
- 9) Verify that the charge current into the battery remains near 1A.
- 10) Increase the load current on SYS to 1.5A.
- 11) Verify that the charge current into the battery is near 0.5A.
- 12) Increase the load current on SYS to 2.5A.
- 13) Verify that current out of the battery is near 0.5A.

## Detailed Description

## Adjusting the EV Kit for In-Circuit Evaluation

Follow the steps below to ensure that the EV kit is configured for operation in a specific application circuit:

- 1) Verify that the EV kit DC input current-limit setting is less than the AC adapter source current limit.
- 2) If necessary, replace R6 in the EV kit such that the DC input current is less than or equal to the AC adapter output-current capability.
- 3) Verify  that  the  USB  source  can  supply 100mA or 500mA.
- 4) Verify the maximum charge-current rating or desired charge-current rating of the battery.
- 5) Ensure that the charge-current setting of the EV kit does not exceed the battery rating, or replace resistor R7 as required. See the Adjusting Input Current Limit and Charge-Current Limit section for more details.

Table 2. Input Limiter Control Logic

| POWER SOURCE                           | DOK   | UOK   | PEN1   | PEN2   | USUS   | DC INPUT CURRENT LIMIT   | USB INPUT CURRENT LIMIT               | MAXIMUM CHARGE CURRENT*   |
|----------------------------------------|-------|-------|--------|--------|--------|--------------------------|---------------------------------------|---------------------------|
| AC adapter at DC input                 | L     | x     | H      | x      | x      | 3000/R6                  | USB input off. DC input has priority. | 3000/R7                   |
| USB power at DC input                  | L     | x     | L      | L      | L      | 100mA                    | USB input off. DC input has priority. | 100mA                     |
| USB power at DC input                  | L     | x     | L      | H      | L      | 500mA                    | USB input off. DC input has priority. | 500mA                     |
| USB power at DC input                  | L     | x     | L      | X      | H      | USB suspend              | USB input off. DC input has priority. | 0                         |
| USB power at USB input, DC unconnected | H     | L     | x      | L      | L      | No DC input              | 100mA                                 | 3000/R7                   |
| USB power at USB input, DC unconnected | H     | L     | x      | H      | L      | No DC input              | 500mA                                 | 3000/R7                   |
| USB power at USB input, DC unconnected | H     | L     | x      | x      | H      | No DC input              | USB suspend                           | 0                         |
| DC and USB unconnected                 | H     | H     | x      | x      | x      | No DC input              | No USB input                          | 0                         |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Adjusting Input Current Limit and Charge-Current Limit

The input and charge current limits are set, as shown in Table 2. It is often preferable to change the input current  limit  as  the  input  power  source  is  changed.  The MAX8677A facilitates this by allowing different input current limits for DC and USB inputs.

When the input current limit is reached, the first action taken by the MAX8677A is to reduce battery-charge current. This allows the SYS regulator to stay in dropout, or at 5.3V, during heavy loads, thus reducing power dissipation. If,  after  the  charge  current  is  reduced to 0mA, the load at SYS still exceeds the input current limit, the SYS voltage starts falling. When the SYS voltage drops to BAT, the SYS-to-BAT switch turns on, using battery power to support the system load during the load peak.

The MAX8677A features flexible input connections (at the  DC and USB input pins) and current-limit settings (set by PEN1, PEN2, PSET, and ISET) to accommodate nearly any input power configuration. However, it is expected that most systems use one of two external power schemes: separate connections for USB and an AC adapter, or a single connector that accepts either USB or the AC adapter output. Input and chargecurrent limits are controlled by PEN1, PEN2, RPSET, and RISET, as shown in Table 2.

## Charge Enable ( CEN )

When CEN is low, the charger is on. When CEN is high, the charger turns off. CEN does not affect the SYS output.  In  many  systems there is no need for the system controller (typically  a  microprocessor) to disable the charger, because the MAX8677A Smart Power Selector circuitry  independently  manages  charging  and adapter/battery power hand-off. In these situations, CEN may be connected to ground.

## MAX8677A Evaluation Kit

## Charge Termination

When the charge current falls to the termination threshold AND the charger is in voltage mode, charging is complete. Charging continues for a brief 15s top-off period and then enters the DONE state where charging stops. The termination current threshold (ITERM) is set by TSET to a percentage of the fast-charge current:

Connect TSET to GND for ITERM = ICHGMAX x 5% Leave TSET open for ITERM = ICHGMAX x 10% Connect TSET to VL for ITERM = ICHGMAX x 15%

Figure 2. MAX8677A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

When the charger enters DONE 15s later, the DONE output goes low. Note that if charge current falls to I TERM  as  a  result  of  the  input  or  thermal  limiter,  the charger does not enter DONE. For the charger to enter DONE, charge current must be less than ITERM, the charger must be in voltage mode, and the input or thermal limiter must not be reducing charge current.

<!-- image -->

<!-- image -->

## MAX8677A Evaluation Kit

<!-- image -->

Figure 3. MAX8677A EV Kit Component Placement GuideComponent Side

Figure 4. MAX8677A EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX8677A EV Kit PCB Layout-Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8677A Evaluation Kit

Figure 6. MAX8677A EV Kit PCB Layout-Layer 3

<!-- image -->

Figure 7. MAX8677A EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6