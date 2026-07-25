<!-- lastmod 2022-08-05 -->
## General Description

The MAX1879, in conjunction with a P-channel MOSFET and a current-limited wall-mount adapter with an output voltage between +4.7V to +20V, allows safe and quick charging of a single lithium-ion (Li+) cell.

The MAX1879 evaluation kit (EV kit) is a complete, fully assembled and tested Li+ battery charger. Jumpers on the EV kit allow easy adjustment to a +4.1V or +4.2V battery regulation voltage. A light-emitting diode (LED) indicates the cell's charging status.

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Fairchild   | 408-822-2000 | 408-822-2102 |
| Murata      | 814-237-1431 | 814-238-0490 |
| Nihon       | 661-867-2555 | 661-867-2698 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |
| Toshiba     | 949-455-2000 | 949-859-3963 |

Note: Indicate that you are using the MAX1879 when contacting these manufacturers.

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| C1, C6        |     0 | Not installed (0805)                                                 |
| C2, C3        |     2 | 0.1µF ± 10%, 50V ceramic capacitors (0805) Taiyo Yuden UMK212BJ104KG |
| C4            |     0 | Not installed (0603)                                                 |
| C5            |     1 | 2.2µF ± 20%, 10V ceramic capacitor (0805) Taiyo Yuden LMK212BJ225MG  |
| C7            |     1 | 1000pF ± 10%, 50V ceramic capacitor (0603) Murata GRM188R71H102KA01  |
| D1            |     1 | 1A Schottky diode (SOT123) Nihon EP10QY03 or Toshiba CRS02           |

- ♦ Simple Stand-Alone Li+ Charger
- ♦ Low Power Dissipation
- ♦ Safely Precharges Over-Discharged Cells
- ♦ Top-Off Charging to Achieve Full Battery Capacity
- ♦ 8-Pin µMAX ® Package
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1879EVKIT | 0 ° C to +70 ° C | 8 µMAX       |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                    |
|---------------|-------|----------------------------------------------------------------|
| LED1          |     1 | LED (T-1 3 /4)                                                 |
| J1            |     1 | PC-mount power jack, 2.1mm                                     |
| JU1           |     1 | 4-pin header                                                   |
| JU2, JU3      |     2 | 2-pin headers                                                  |
| P1            |     1 | 20V, 4.5A, p-channel MOSFET (6-pin SuperSOT) Fairchild FDC638P |
| R1            |     1 | 412k Ω ± 1% resistor (0805)                                    |
| R2            |     1 | 10k Ω ± 5% resistor (0805)                                     |
| U1            |     1 | MAX1879EUA (8-pin µMAX)                                        |
| -             |     3 | Shunts (JU1, JU2, JU3)                                         |
| -             |     1 | MAX1879 PC board                                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

## Features

## MAX1879 Evaluation Kit

## Quick Start

The MAX1879 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not plug the WALL CUBE in until indicated.

- 1) Install a shunt across pins 1 and 2 of jumper JU1 (TSEL) for a minimum 34ms on-time top-off pulse width.
- 2) Install  a  shunt  across jumper JU2 (THERM) to disable the temperature-monitoring function.
- 3) Verify that a shunt is not across jumper JU3 (ADJ) if charging a +4.2V Li+ battery. Install a shunt across jumper JU3 if charging a +4.1V Li+ battery.
- 4) Connect a 6V current-limiting ( ≤ 1A) power supply across the EV kit's WALL CUBE and GND terminals.
- 5) Place a voltmeter across the EV kit's BATT+ and BATT- terminals.
- 6) Observe correct Li+ cell polarity. Connect a single-cell  Li+  battery  across  the  EV  kit's  BATT+  and BATT- terminals. The LED turns on if the battery voltage is below the predetermined voltage (4.1V or 4.2V) and greater than +2.5V. See Table 4 for additional LED status descriptions.
- 7) The LED turns off once the Li+ cell has been charged to the predetermined voltage.

## Detailed Description

The MAX1879 EV kit is a fully assembled and tested single Li+ battery charger. The EV kit contains an external  p-channel MOSFET for current switching and can deliver up to 1A of current to an Li+ battery.

The EV kit contains a jumper that sets the battery (BATT) regulation voltage to +4.1V or +4.2V. An external resistor can also adjust the regulation voltage from +4.0V to +4.2V. An LED indicates the charging status of the battery. The maximum charging time is 6.25 hours.

The MAX1879 employs thermistor feedback to prequalify the Li+ cell's temperature for fast charging. The EV kit contains a jumper that allows the user to bypass this feature or to connect an external thermistor to the EV kit board.

## Input Source

The input source for the MAX1879 EV kit must be a current-limited supply capable of continuous short-circuit operation. The supply should have a current limit of ≤ 1A and an output voltage between +4.7V and +20V. Connect a current-limited wall cube to power jack J1 (center pin is the positive terminal); otherwise, connect a current-limited power-supply across the WALL CUBE and GND PC pads. Current-limited power sources with higher charge currents can be used, but diode D1 and MOSFET P1 must be rated accordingly.

## Jumper Selection

The MAX1879 EV kit features jumpers (JU1, JU2, and JU3) to configure the circuit for optimal charging performance and evaluation.

Jumper JU1 sets the minimum on-time pulse width. See Table 1 for the JU1 shunt configuration to select the appropriate top-off pulse width. Refer to the Selecting Minimum On-Time section in the MAX1879 data sheet for information on selecting the minimum on-time pulse width in top-off mode.

## Table 1. JU1 Shunt Positions

| SHUNT POSITION   | TSEL PIN          |   MINIMUM ON-TIME IN TOP-OFF (ms) |
|------------------|-------------------|-----------------------------------|
| 1-2              | Connected to BATT |                                34 |
| 1-3              | Connected to ADJ  |                                69 |
| 1-4              | Connected to GND  |                               137 |

Jumper JU2 connects the MAX1879 thermistor input (THERM) to a 10k Ω resistor, thus disabling temperature qualification. To enable temperature qualification, remove the shunt from JU2 and connect a thermistor between the THERM and GND pads. The thermistor should be 10k Ω at +25°C and have a negative temperature coefficient. See Table 2 for the JU2 configuration. Refer to the Thermistor section in the MAX1879 data sheet for other thermistor details.

Table 2. Using a Thermistor

| JUMPER   | JUMPER STATE   | FUNCTION                                                  |
|----------|----------------|-----------------------------------------------------------|
| JU2      | Open           | Open before connecting a thermistor from THERM pad to GND |
| JU2      | Closed         | Bypasses THERM with 10k Ω resistor                        |

Jumper JU3 sets the battery regulation voltage. The EV kit  comes with two voltage options, 4.2V (JU3 open) and 4.1V (JU3 closed). For other voltages (+4.0V to +4.2V), replace resistor R1. Refer to the Adjusting the Battery Regulation Voltage section in the MAX1879 data sheet to select resistor R1. See Table 3 for the JU3 configuration.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 3. Fixed Voltage Regulation

| JUMPER   | JUMPER STATE   | VOLTAGE REGULATION   |
|----------|----------------|----------------------|
| JU3      | Open           | 4.2V                 |
| JU3      | Closed         | 4.1V                 |

## Output Signal

The LED on the EV kit is driven by the CHG pin. Depending on the Li+ cell's charging status, the pin is low or high impedance, thus turning the LED on or off.

If  a  thermistor  is  installed,  and  the  cell  temperature  is unacceptable for fast charging, or the charger is in the precharging state, the LED blinks at 2Hz. The EV kit stops charging the cell during a temperature fault. See Table 4 for LED and CHG states.

For driving logic circuits, remove the LED and install a 100k Ω pullup resistor from CHG to the logic supply of the CHG monitoring circuit. A logic-low signal appears at CHG when the charger is in fast-charge; otherwise, a logic high signal is detected. During the precharging or temperature fault state, the output logic signal alternates between low and high at a fixed frequency of 2Hz. See Table 4.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1879 Evaluation Kit

## Table 4. LED States

| LED            | CONDITION                                                                           | CHG STATE                           |
|----------------|-------------------------------------------------------------------------------------|-------------------------------------|
| Off            | No battery, no WALL CUBE, cell voltage < 2.2V, top-off, or battery charged          | High impedance                      |
| On             | Fast-charge in progress                                                             | Low impedance                       |
| Blinking (2Hz) | Precharging near-dead cells (+2.2 to +2.5V) or temperature fault during fast-charge | High-low impedance (50% duty cycle) |

## MAX1879 Evaluation Kit

Figure 1. MAX1879 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX1879 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1879 Evaluation Kit

Figure 3. MAX1879 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1879 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 5