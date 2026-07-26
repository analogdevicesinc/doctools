<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX8804Z evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the highly integrated MAX8804Z linear battery charger for single-cell lithium-ion  (Li+)  batteries.  The  EV  kit  safely  charges  a single Li+ battery to 4.2V. The EV kit accepts a 4.15V to 30V DC source voltage or a 4.15V to 16V USB input voltage, but disables charging when either input voltage exceeds 7.5V to protect against unqualified or faulty  input  sources. A simple single-wire SET input to the EV kit allows the user to enable/disable the charger or  program the charge current and top-off threshold. Three LEDs on the EV kit indicate the power-OK, USB power status, and charger status. The MAX8804Z EV kit can  also  evaluate  the  MAX8804V/MAX8804W/ MAX8804Y. To evaluate the MAX8804V/MAX8804W/ MAX8804Y, order a free sample along with this EV kit.

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| C1, C2        |     2 | 1µF ±10%, 35V X5R ceramic capacitors (0603) Taiyo Yuden GMK107BJ105KA       |
| C3            |     1 | 2.2µF ±10%, 10V X5R ceramic capacitor (0603) Taiyo Yuden LMK107BJ225KA      |
| C4            |     1 | 0.1µF ±10%, 10V X5R ceramic capacitor (0402) Taiyo Yuden LMK105BJ104KV      |
| C5            |     1 | 33pF ±10%, 50V C0G ceramic capacitor (0402) Taiyo Yuden UMK105CG330KV       |
| D1, D2, D3    |     3 | Green LEDs Agilent HSMG-C150                                                |
| D4            |     1 | Bias resistor transistor ON Semiconductor DTC144E                           |
| J1            |     1 | Male,USB type-B right-angle connector Digi-Key AE9925-ND Assmann AU-Y1007-R |
| JU1           |     1 | 3-pin header Sullins PTC36SAAN Digi-Key S1012-36-ND                         |

## Features

- ♦ Complete Charger for Single-Cell Li+ Battery
- ♦ Dual-Input, 30V AC Adapter/16V USB
- ♦ No External FET, Blocking Diode, or Sense Resistor Required
- ♦ Automatic USB/AC Adapter Input Selection
- ♦ Easy Programmable Fast-Charge Current and Top-Off Threshold
- ♦ Proprietary Die Temperature Regulation Control
- ♦ ±5% Fast-Charge Current-Limit Accuracy
- ♦ Battery-Pack Detection Input (MAX8804V/ MAX8804W)
- ♦ Power-Present and Charger-Status Outputs
- ♦ No Prequalification Charge (MAX8804Y)
- ♦ Tiny 2mm x 3mm Thermally Enhanced TDFN Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX8804ZEVKIT+ | EV Kit |

+Denotes lead-free and RoHS-compliant.

## Component List

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                      |
|---------------|-------|--------------------------------------------------------------------------------------------------|
| JU2           |     1 | 2-pin header Sullins PTC36SAAN Digi-Key S1012-36-ND                                              |
| R1, R2, R3    |     3 | 330 Ω ±5% resistors (0603)                                                                       |
| R4, R5, R7    |     3 | 100k Ω ±5% resistors (0402)                                                                      |
| R6            |     1 | 1k Ω ±5% resistor (0402)                                                                         |
| R8            |     1 | 4.7k Ω ±5% resistor (0603)                                                                       |
| S1            |     1 | Momentary pushbutton switch Panasonic EVQ-PHP03T Digi-Key P8048STR-ND                            |
| U1            |     1 | High-voltage, dual-input, USB/AC adapter charger (8 TDFN-EP*) Maxim MAX8804ZETA+ (Top Mark: AAC) |
| U2            |     1 | ICM7555ISA+ or Digi-Key LM555CM-ND                                                               |
| -             |     1 | PCB: MAX8804Z Evaluation Kit+                                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

## MAX8804Z Evaluation Kit

## Component Suppliers

| SUPPLIER             | PHONE        | WEBSITE         |
|----------------------|--------------|-----------------|
| Agilent Technologies | 877-424-4536 | www.agilent.com |
| Digi-Key Corp.       | 800-344-4539 | www.digikey.com |
| ON Semiconductor     | 602-244-6600 | www.onsemi.com  |
| Taiyo Yuden          | 847-925-0888 | www.yuden.co.jp |

Note: Indicate that you are using the MAX8804Z when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- Two variable 6V power supplies capable of 750mA
- One voltmeter
- One-cell Li+ battery
- 11) Verify  that  the CHG LED (D1) turns on. The CHG LED turns on during prequalification and fastcharge conditions. The CHG LED turns off when the battery-charging current drops below the top-off threshold current.
- 12) Turn off the power supplies and disconnect the battery.  Place  the  JU1  shunt  across pins 2-3 to set USB charge mode. Then repeat from step 3 using the USBIN pad.

## Detailed Description

## Input Source

The MAX8804V/MAX8804W/MAX8804Y/MAX8804Z are designed to charge a single-cell Li+ battery from a 4.15V to 7.0V DC source voltage or USB input voltage. The IC accepts DC input voltages up to 30V and USB input  voltages  up  to  16V,  but  disables  charging  when the input voltage exceeds 7.5V. A male, USB type-B jack is available to connect the MAX8804Z EV kit to a standard 100mA/500mA USB port to power the EV kit.

## Charging Profile

The MAX8804V/MAX8804W/MAX8804Y/MAX8804Z dual-input linear battery chargers use voltage, current, and thermal-control loops to charge and protect a single Li+ battery. When a Li+ battery with a cell voltage below 2.5V i s i nserted, the MAX8804V/MAX8804W/MAX8804Z charger enters the prequalification stage where it precharges that cell with 95mA. The CHG indicator output is driven low to indicate entry into the prequalification state. When battery voltage exceeds 2.5V, the charger soft-starts as it enters the fast-charge state. The MAX8804Y eliminates the prequalification state and enters fast charge  when  the  battery  is  inserted.  In  the MAX8804V/MAX8804W/MAX8804Y/MAX8804Z, the fast-charge current level is programmed by a simple single-wire SET input. As the battery voltage approaches 4.2V, the charging current is reduced. If the battery current drops below the top-off current threshold, the CHG indicator goes high impedance, signaling that the battery is fully charged. The ICs then enter a constant voltage-regulation mode to maintain the battery at full charge.

<!-- image -->

## Procedure

The MAX8804Z EV kit is a fully assembled and tested surface-mount PCB. Follow the steps below to verify board operation. Caution: Do not turn on the power supplies until all connections are completed.

- 1) Place the JU1 shunt across pins 1-2 to set the EV kit for DC charge mode.
- 2) Verify that jumper JU2 is open.
- 3) Preset a power supply to 5V and the second power supply to 3.3V. Turn off the power supplies.
- 4) Connect the positive lead of the 5V power supply to the DCIN pad. Connect the negative lead of the 5V power supply to the GND pad.
- 5) Connect the positive lead of the 3.3V power supply to  the  VLOGIC pad. Connect the negative lead of the 3.3V power supply to the GND pad.
- 6) Connect the voltmeter from the BAT pad to the GND pad.
- 7) Turn on the power supplies.
- 8) Verify  that  the POK LED (D2) turns on to indicate power OK.
- 9) Verify that the voltage is 4.2V at the BAT pad.
- 10) Observe correct Li+ battery polarity. Connect the positive terminal of the Li+ battery to the BAT pad. Connect the negative terminal of the Li+ battery to the GND pad.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 1. SET Truth Table

|   SET | V DC    | V USB   | CHARGER STATUS                                      |
|-------|---------|---------|-----------------------------------------------------|
|     0 | Invalid | Invalid | Off                                                 |
|     0 | Invalid | Valid   | Off                                                 |
|     0 | Valid   | Invalid | DC charging mode enabled/USB charging mode disabled |
|     0 | Valid   | Valid   | DC charging mode enabled/USB charging mode disabled |
|     1 | Invalid | Invalid | Off                                                 |
|     1 | Invalid | Valid   | DC charging mode disabled/USB charging mode enabled |
|     1 | Valid   | Invalid | Off                                                 |
|     1 | Valid   | Valid   | Off                                                 |

Note: This table is true when DETBAT = low for the MAX8804V/MAX8804W. When DETBAT = high, the MAX8804V/MAX8804W enter shutdown.

## SET Input

SET is a logic input for selecting the DC/USB charging mode and charging current. Drive SET low or leave it unconnected to enable DC charging mode. Drive SET high to enable USB charging mode (see Table 1).

SET can also be driven by series pulses to program the charging current in both DC and USB mode. Pulsegenerating circuitry is included on the EV kit to program the charge current and top-off threshold. With the JU1 shunt across pins 1-2, pressing the S1 switch generates pulses to program the DC charging current, as shown in Tables 2, 3, and 4. With the JU1 shunt across pins 2-3, pressing the S1 switch generates pulses to program the USB charging current, as shown in Tables 5 and 6. Refer to  the  MAX8804V/MAX8804W/MAX8804Y/MAX8804Z IC data sheet for timing diagrams.

Table 2. MAX8804Y/MAX8804Z DC Charging Current Programming by Series Pulses

| PULSE NUMBER                   | DEFAULT   | 1st   | 2nd   | 3rd   | 4th   | 5th   | 6th   | 7th   | 8th   | 9th   | 10th   | 11th   | 12th   | 13th   | 14th   |
|--------------------------------|-----------|-------|-------|-------|-------|-------|-------|-------|-------|-------|--------|--------|--------|--------|--------|
| I CHG (mA)                     | 500       | 500   | 500   | 500   | 550   | 550   | 550   | 550   | 600   | 600   | 600    | 600    | 450    | 450    | 450    |
| Top-Off Current Threshold (mA) | 80        | 90    | 100   | 70    | 80    | 90    | 100   | 70    | 80    | 90    | 100    | 70     | 80     | 90     | 100    |
| PULSE NUMBER                   | DEFAULT   | 15th  | 16th  | 17th  | 18th  | 19th  | 20th  | 21st  | 22nd  | 23rd  | 24th   | 25th   | 26th   | 27th   | 28th   |
| I CHG (mA)                     | -         | 450   | 400   | 400   | 400   | 400   | 650   | 650   | 650   | 650   | 700    | 700    | 700    | 700    | 500    |
| Top-Off Current Threshold (mA) | -         | 70    | 80    | 90    | 100   | 70    | 80    | 90    | 100   | 70    | 80     | 90     | 100    | 70     | 80     |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8804Z Evaluation Kit

## MAX8804Z Evaluation Kit

## Table 3. MAX8804W DC Charging Current Programming by Series Pulses

| PULSE NUMBER                   | DEFAULT   | 1st   | 2nd   | 3rd   | 4th   | 5th   | 6th   | 7th   | 8th   | 9th   | 10th   | 11th   | 12th   | 13th   | 14th   |
|--------------------------------|-----------|-------|-------|-------|-------|-------|-------|-------|-------|-------|--------|--------|--------|--------|--------|
| I CHG (mA)                     | 450       | 450   | 450   | 450   | 550   | 550   | 550   | 550   | 500   | 500   | 500    | 500    | 400    | 400    | 400    |
| Top-Off Current Threshold (mA) | 80        | 90    | 100   | 70    | 80    | 90    | 100   | 70    | 80    | 90    | 100    | 70     | 80     | 90     | 100    |
| PULSE NUMBER                   | -         | 15th  | 16th  | 17th  | 18th  | 19th  | 20th  | 21st  | 22nd  | 23rd  | 24th   | 25th   | 26th   | 27th   | 28th   |
| I CHG (mA)                     | -         | 400   | 600   | 600   | 600   | 600   | 650   | 650   | 650   | 650   | 700    | 700    | 700    | 700    | 450    |
| Top-Off Current Threshold (mA) | -         | 70    | 80    | 90    | 100   | 70    | 80    | 90    | 100   | 70    | 80     | 90     | 100    | 70     | 80     |

## Table 4. MAX8804V DC Charging Current Programming by Series Pulses

| PULSE NUMBER                   | DEFAULT   | 1st   | 2nd   | 3rd   | 4th   | 5th   | 6th   | 7th   | 8th   | 9th   | 10th   | 11th   | 12th   | 13th   | 14th   |
|--------------------------------|-----------|-------|-------|-------|-------|-------|-------|-------|-------|-------|--------|--------|--------|--------|--------|
| I CHG (mA)                     | 450       | 450   | 450   | 450   | 550   | 550   | 550   | 550   | 500   | 500   | 500    | 500    | 400    | 400    | 400    |
| Top-Off Current Threshold (mA) | 120       | 140   | 180   | 200   | 120   | 140   | 180   | 200   | 120   | 140   | 180    | 200    | 120    | 140    | 180    |
| PULSE NUMBER                   | -         | 15th  | 16th  | 17th  | 18th  | 19th  | 20th  | 21st  | 22nd  | 23rd  | 24th   | 25th   | 26th   | 27th   | 28th   |
| I CHG (mA)                     | -         | 400   | 600   | 600   | 600   | 600   | 650   | 650   | 650   | 650   | 700    | 700    | 700    | 700    | 450    |
| Top-Off Current Threshold (mA) | -         | 200   | 120   | 140   | 180   | 200   | 120   | 140   | 180   | 200   | 120    | 140    | 180    | 200    | 120    |

## DC Charging Mode

The MAX8804V/MAX8804W/MAX8804Y/MAX8804Z automatically select between either a USB or AC adapter input source. Drive SET low or leave it unconnected to enable DC charging mode. Subsequent pulses on SET program the charging current and the top-off threshold. There are seven fast-charge current options and four top-off threshold options. Pulse SET high (1µs to 1ms pulse width) subsequently to realize charging current and top-off threshold programming and transition.  After  the  28th  pulse,  the  MAX8804V/ MAX8804W/MAX8804Y/MAX8804Z return to the default mode and start a new cycle. See Tables 2, 3, and 4 to set the desired charging current and top-off threshold. Drive SET high longer than 2ms to disable DC charging control circuitry.

## USB Charging Mode

Drive SET high to enable USB charging mode when the USB input is valid. Subsequent low pulses with 1µs to 1ms pulse width on SET program the fast-charging current from 95mA, 380mA, to 475mA for the MAX8804Y/ MAX8804Z, and from 380mA, 475mA, to 95mA for the MAX8804V/MAX8804W, and then repeat a new cycle as shown in Tables 5 and 6. Drive SET low or leave it unconnected longer than 2ms to disable USB charging control circuitry.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8804Z Evaluation Kit

## Table 5. MAX8804Y/MAX8804Z USB Charging Current Programming by Series Pulses

## Table 6. MAX8804V/MAX8804W USB Charging Current Programming by Series Pulses

| PULSE NUMBER                   |   DEFAULT |   1st |   2nd |   3rd |
|--------------------------------|-----------|-------|-------|-------|
| I CHG (mA)                     |        95 |   380 |   475 |    95 |
| Top-Off Current Threshold (mA) |        80 |    80 |    80 |    80 |

## Charging-Status Output ( CHG )

The CHG LED (D1) indicates charging status. The LED is on ( CHG low) when the charger is in the prequalification  or  fast-charge  mode. It  is  off  ( CHG high impedance) when the charger reaches the top-off mode for more than 4ms, indicating that charging is done.

## Power-OK Output ( POK )

The POK LED (D2) is a visual indicator of power-OK status. When a valid input at either DC or USB is detected greater than 4.15V and exceeds the battery voltage by 250mV, POK pulls  low  to  indicate  that  the input power is OK. Otherwise, POK is high impedance. POK status is maintained regardless of SET status.

## USB Power Status Output ( USBPWR ) (MAX8804Y/MAX8804Z Only)

The USBPWR LED (D3) indicates USB power status output.  The  LED  is  on  ( USBPWR l ow)  when VUSB &gt; VUVLO and VUSB - VBAT &gt; 250mV. Otherwise, it is  high  impedance. USBPWR indicates the USB input presence regardless of SET status and charger status.

| PULSE NUMBER                   |   DEFAULT |   1st |   2nd |   3rd |
|--------------------------------|-----------|-------|-------|-------|
| I CHG (mA)                     |       380 |   475 |    95 |   380 |
| Top-Off Current Threshold (mA) |        80 |    80 |    80 |    80 |

## Battery Pack Detection Input (DETBAT) (MAX8804V/MAX8804W Only)

The DETBAT input is pulled up to an internal 3V supply through a 63k Ω resistor.  Installing  a  shunt  on  jumper JU2 allows SET to control the charger. The MAX8804V/ MAX8804W enter shutdown when the shunt on jumper JU2 is removed.

## Thermal-Regulation Control

The thermal-regulation loop limits the MAX8804V/ MAX8804W/MAX8804Y/MAX8804Z die temperature to +105°C by reducing the charge current as necessary. This feature not only protects the ICs from overheating, but also allows a higher charge current at room temperature, without risking damage to the system.

## Evaluating the MAX8804V/MAX8804W/MAX8804Y

For evaluating the MAX8804V/MAX8804W/MAX8804Y, carefully remove the MAX8804Z IC (U1) and install the MAX8804V/MAX8804W/MAX8804Y IC. All other components remain the same.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8804Z Evaluation Kit

Figure 1. MAX8804Z EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8804Z Evaluation Kit

<!-- image -->

Figure 2. MAX8804Z EV Kit Component Placement GuideComponent Side

Figure 3. MAX8804Z EV Kit PCB Layout-Top Layer

<!-- image -->

Figure 4. MAX8804Z EV Kit PCB Layout-Bottom Layer

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7