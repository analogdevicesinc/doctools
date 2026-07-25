<!-- lastmod 2022-10-10 -->
<!-- image -->

## MAX16803EVKIT+BJT Evaluation Kit+

## General Description

The MAX16803EVKIT+BJT (EV kit) demonstrates a high-current LED driver with accurate current control based on the MAX16803 current regulator. This EV kit is capable of supplying regulated LED currents of up to 1A and can operate at supply voltages between 6.5V to 40V, and temperatures ranging from 0°C to +70°C.

The MAX16803EVKIT+BJT features pulse-width modulation  (PWM) dimming control, user-selectable threelevel output-current setting, and a 5V-regulated output, which can supply up to 4mA of output current. The MAX16803EVKIT+BJT EV kit is a fully assembled and tested printed-circuit board (PCB).

Warning: Under severe fault or failure conditions, this EV kit  can  dissipate  large  amounts of power. Operate this EV kit with care to avoid possible personal injury.

| DESIGNATION        |   QTY | DESCRIPTION                                                     |
|--------------------|-------|-----------------------------------------------------------------|
| C1                 |     1 | 1µF, 50V X7R ceramic capacitor (1206) Murata GRM31MR71H105KA    |
| C2                 |     1 | 0.1µF, 16V X7R ceramic capacitor (0805) TDK C2012X7R1C104K-0.85 |
| J1, J2, J5, J6, J7 |     5 | 0.1in, 2-pin headers (through hole)                             |
| J3, J4             |     2 | 0.1in, 3-pin headers (through hole)                             |
| Q1                 |     1 | npn epitaxial silicon transistor (DPAK) Fairchild MJD31CTF      |

## Features

- ♦ 6.5V to 40V Supply Voltage Range
- ♦ Selectable 450mA, 750mA, or 1A Output Current
- ♦ On-Board LED Load Rated for 1A
- ♦ Auxiliary 5V-Regulated Output
- ♦ Wide-Range Dimming with PWM Control Signal

## Ordering Information

| PART              | TEMP RANGE    | IC PACKAGE   |
|-------------------|---------------|--------------|
| MAX16803EVKIT+BJT | 0°C to +70°C* | 16 TQFN-EP** |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                           |
|---------------|-------|-------------------------------------------------------|
| R1            |     1 | 0.2 Ω ±1%, 1/4W resistor (0805) Susumu RP2012T-R20-F  |
| R2            |     1 | 0.27 Ω ±1%, 1/4W resistor (0805) Susumu RP2012T-R27-F |
| U1            |     1 | MAX16803ATE+ (5mm x 5mm, 16-pin thin QFN-EP)          |
| -             |     1 | PCB: MAX16803EVKIT+BJT Evaluation Kit+                |

## Component Suppliers

| SUPPLIER                 | PHONE          | FAX            | WEBSITE               |
|--------------------------|----------------|----------------|-----------------------|
| Murata Mfg. Co., Ltd.    | 770-436-1300   | 770-436-3030   | www.murata.com        |
| Fairchild Semiconductor  | 972-910-8000   | 972-910-8036   | www.fairchildsemi.com |
| KEMET Corp.              | 1-978-658-1663 | 1-978-658-1790 | www.kemet.com         |
| Susumu International USA | 1-208-328-0307 | 1-208-328-0308 | www.susumu-usa.com    |

Note: Indicate that you are using the MAX16803 when contacting these component suppliers.

## MAX16803EVKIT+BJT Evaluation Kit+

## Quick Start

## Recommended Equipment

- 0 to 30V (or above), 1.5A power supply

## Procedure

The MAX16803EVKIT+BJT EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect a 0 to 30V (or above), 1.5ADC power supply to VIN.
- 2) Close jumpers J2, J5, and J7.
- 3) Place jumper J3 between pin 1 (DIM) and pin 2 (+5V).
- 4) Open all pins of jumper J4 to select 450mA output current.
- 5) Connect one 1A-rated LED string with 3 LEDs in series between LED+ and LED-.
- 6) Turn on the power supply and increase the input voltage to above 10V. The LED should light up with full brightness. Measure the LED current to confirm 450mA ± 3.5%.
- 7) Increase the supply voltage to 13V and the LED current will remain stable. Measure the LED current to    show  450mA ± 3.5%. Measure voltage across V5 to show 5.28V ± 5%.

## Detailed Description

The MAX16803EVKIT+BJT EV kit demonstrates a high-current  LED driver  with  accurate  current  control based on the MAX16803 current regulator. This EV kit is  capable  of  supplying  regulated  output  currents  of up to 1A and can run at supply voltages between 6.5V to 40V.

The MAX16803EVKIT+BJT EV kit features PWM dimming for control of the LED brightness by varying the duty cycle of the PWM input signal. Users can select between three levels of LED currents by setting jumper J4. See Table 1 for j umper settings. The MAX16803EVKIT+BJT EV kit also includes a connection for the 5V-regulated output and access to the onboard current-sense resistor.

## Output Current Setting

The output current can be set to 450mA, 750mA, or 1A by adjusting the position of jumper J4. See Table 1 for jumper settings. The output current can be adjusted by replacing resistors R2 or R3 with value calculated using the following equation:

<!-- formula-not-decoded -->

where RTotalSensor is the external current-sense resistor between CS+ and CS-, and IOUT is the desired output current.

## PWM Dimming

The PWM dimming controls the LED brightness by adjusting the duty cycle of the PWM input signal connected to the DIM input. A high at the PWM\_IN input turns on the output current and a low turns off the LED current. Connect a signal with amplitude between 5V and 40V and with frequency between 100Hz-2kHz, and vary the duty cycle to adjust the LED brightness. LED brightness increases when duty cycle increases and vice versa. Duty cycle can be as low as 10%, even at a PWM frequency of 2kHz.

## 5V-Regulated Output

The 5V regulator can be used to power other components from the V5 connector. The 5V output can supply up to 4mA of current and is not disabled during PWM low.

## Power Dissipation and Thermal Management

The power dissipation in the MAX16803 can be calculated using the following equation:

<!-- formula-not-decoded -->

where P1 is the power dissipation in MAX16803, IB is the output current of MAX16803 (the base current of Q1), and VDROP is the voltage drop between IN and OUT of this device.

Thermal shutdown turns the device off if power dissipation in the MAX16803 causes the junction temperature to reach +155°C (typ).

The power dissipation in BJT can be calculated using the following equation:

<!-- formula-not-decoded -->

where P2 is the power dissipation in BJT, Q1. IE is the emitter current of Q1, which is the actual LED current, and VCE is the voltage drop between collector and emitter of the BJT. VFDLED is the forward voltage across the LED string and VRSENSE is the voltage across the current-sense resistor, equal to 203mV.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16803EVKIT+BJT Evaluation Kit+

An external resistor can be added at the input to the device, or in series with LED, to reduce the power dissipation in the BJT. The resistor's power rating should be higher than I 2 R (where I is the input current, or LED current, and R is the value of the added resistor).

The BJT junction-temperature rise above the ambient can be calculated by multiplying the power dissipated in  BJT  by  the  sum  of  the  thermal  resistances  of  BJT from junction to ambient. To reduce the temperature rise,  either  the  power  dissipation  or  the  thermal  resistance should be reduced. It is a good practice to enlarge surface area of the board, fill copper on both sides, and add vias from top to bottom for reducing the thermal resistance.

Caution: The board should support 3W power dissipation for BJT at TA = +30°C. If the power dissipation in BJT is  considerably higher, BJT junction temperature can reach unsafe levels and the device can be damaged.

## Jumper Selection

Two-pin  jumper  J2  controls  the  EN  pin  of  the MAX16803 and closing of J2 enables the device. Three-pin jumper J4 can select between three different output current settings. Three-pin jumper J3 controls the  PWM input of the device. Table 1 lists the jumper options.

## Table 1. Jumpers J1, J2, and J3 Functions

|        | SHUNT POSITION AND FUNCTION   | SHUNT POSITION AND FUNCTION   | SHUNT POSITION AND FUNCTION   |
|--------|-------------------------------|-------------------------------|-------------------------------|
| JUMPER | CLOSED                        | CLOSED                        | OPEN                          |
|        | PINS 1-2                      | PINS 2-3                      |                               |
| J4     | 1A                            | 750mA                         | 450mA                         |
| J3     | PWM disabled and always on    | PWM disabled and always off   | PWM enabled                   |
| J2     | U1 enabled                    | U1 enabled                    | U1 disabled                   |

<!-- image -->

Figure 1. MAX16803EVKIT+BJT Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16803EVKIT+BJT Evaluation Kit+

Figure 2. MAX16803EVKIT+BJT Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX16803EVKIT+BJT PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Heaney

## MAX16803EVKIT+BJT Evaluation Kit+

Figure 4. MAX16803EVKIT+BJT PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5