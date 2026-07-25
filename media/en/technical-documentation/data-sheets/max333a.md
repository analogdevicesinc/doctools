<!-- lastmod 2022-08-04 -->
<!-- image -->

## Precision, Quad, SPDT, CMOS Analog Switch

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX333A is a precision, quad, single-pole doublethrow (SPDT) analog switch. The four independent switches operate with bipolar supplies ranging from ±4.5V to ±20V, or with a single-ended supply between +10V and +30V. The MAX333A offers low on resistance (less than 35 Ω ), guaranteed to match within 2 Ω between channels and to remain flat over the analog signal range ( ∆ 3 Ω max). It also offers break-before-make switching (10ns typical), with turn-off times less than 145ns and turn-on times less than 175ns. The MAX333A is ideal for portable operation since quiescent current runs less than 50µA with all inputs high or low.

This monolithic, quad switch is fabricated with Maxim's new improved silicon-gate process.  Design improvements guarantee extremely low charge injection (10pC), low power consumption (3.75mW), and electrostatic discharge (ESD) greater than 2000V.

Logic inputs are TTL and CMOS compatible and guaranteed over a +0.8V to +2.4V range-regardless of supply voltage. Logic inputs and switched analog signals can range anywhere between the supply voltages without damage.

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configuration

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Upgraded Replacement for a DG211/DG212 Pair or Two DG403s
- ' Low On Resistance &lt; 17 Ω Typical (35 Ω Max)
- ' Guaranteed Matched On Resistance Between Channels &lt; 2 Ω
- ' Guaranteed Flat On Resistance over Analog Signal Range ∆ 3 Ω Max
- ' Guaranteed Charge Injection &lt; 10pC
- ' Guaranteed Off-Channel Leakage &lt; 6nA at +85°C
- ' ESD Guaranteed &gt; 2000V per Method 3015.7
- ' Single-Supply Operation (+10V to +30V) Bipolar-Supply Operation (±4.5V to ±20V)
- ' TTL-/CMOS-Logic Compatibility
- ' Rail-to-Rail Analog Signal Handling Capability

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART       | TEMP. RANGE     | PIN-PACKAGE    |
|------------|-----------------|----------------|
| MAX333ACPP | 0°C to +70°C    | 20 Plastic DIP |
| MAX333ACWP | 0°C to +70°C    | 20 Wide SO     |
| MAX333ACUP | 0°C to +70°C    | 20 TSSOP       |
| MAX333AC/D | 0°C to +70°C    | Dice*          |
| MAX333AEPP | -40°C to +85°C  | 20 Plastic DIP |
| MAX333AEWP | -40°C to +85°C  | 20 Wide SO     |
| MAX333AEUP | -40°C to +85°C  | 20 TSSOP       |
| MAX333AMJP | -55°C to +125°C | 20 CERDIP      |

* Contact factory for dice specifications.

## \_\_\_\_\_\_\_\_\_\_Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## Precision, Quad, SPDT, CMOS Analog Switch

## ABSOLUTE MAXIMUM RATINGS

| V+ to V-                                                                                       | ..................................................................................44V     |
|------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| V IN , V COM , V NO , V NC ......................................................V-            | to V+                                                                                     |
| (V NO - V NC ) ............................................................................32V |                                                                                           |
| V+ to Ground..........................................................................30V      |                                                                                           |
| V- to Ground..........................................................................-30V     |                                                                                           |
| Current, Any Terminal Except V COM , V NO , or V NC .............30mA                          |                                                                                           |
| Continuous Current, V COM , V NO , or V NC ............................20mA                    |                                                                                           |
| Peak Current, V COM , V NO , or V NC (Pulsed at 1ms, 10% duty cycle max)                       | ............................70mA                                                          |
| ESD                                                                                            | ....................................................................................2000V |

Note 1: Device mounted with all leads soldered to PC board.

| Continuous Power Dissipation (T A = +70°C) (Note 1)                          |
|------------------------------------------------------------------------------|
| Plastic DIP (derate above +70°C by 11.11mW/°C) .....889mW                    |
| SO (derate above +70°C by 10.00mW/°C)..................800mW                 |
| CERDIP (derate above +70°C by 11.11mW/°C)..........889mW                     |
| TSSOP (derate above +70°C by 7mW/°C) ..................559mW                 |
| Operating Temperature Ranges:                                                |
| MAX333AC__ .....................................................0°C to +70°C |
| MAX333AE__ ..................................................-40°C to +85°C  |
| MAX333AMJP................................................-55°C to +125°C    |
| Storage Temperature Range.............................-65°C to +150°C        |
| Lead Temperature (soldering, 10sec) .............................+300°C      |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS-Dual Supplies

(GND = 0V, V+ = +15V, V- = -15V, TA = +25°C, unless otherwise noted.)

| PARAMETER                                     | SYMBOL             | CONDITIONS                                                        | CONDITIONS                                                        | CONDITIONS                                                       | TYP (Notes 2, 3)   | MAX                | UNITS              |                    |
|-----------------------------------------------|--------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|------------------------------------------------------------------|--------------------|--------------------|--------------------|--------------------|
| POWER REQUIREMENTS                            | POWER REQUIREMENTS | POWER REQUIREMENTS                                                | POWER REQUIREMENTS                                                | POWER REQUIREMENTS                                               | POWER REQUIREMENTS | POWER REQUIREMENTS | POWER REQUIREMENTS | POWER REQUIREMENTS |
| Positive Supply Current                       | I+                 | V IN = 0V/5V,V+ = 16.5V, V- = -16.5V                              | V IN = 0V/5V,V+ = 16.5V, V- = -16.5V                              | V IN = 0V/5V,V+ = 16.5V, V- = -16.5V                             | 0.05               | 0.25               | mA                 |                    |
| Supply Voltage                                | V+/V-              | Dual supply, V+ = V-                                              | Dual supply, V+ = V-                                              | Dual supply, V+ = V-                                             | ±4.5V              | ±20                | V                  |                    |
| Range                                         | V+                 | Single supply, V- = GND                                           | Single supply, V- = GND                                           | Single supply, V- = GND                                          | 10                 | 30                 |                    |                    |
| Negative Supply Current                       | I-                 | V IN = 0V/5V,V+ = 16.5V, V- = -16.5V                              | V IN = 0V/5V,V+ = 16.5V, V- = -16.5V                              | V IN = 0V/5V,V+ = 16.5V, V- = -16.5V                             | 0.01               | 1                  | m A                |                    |
| LOGIC INPUT                                   | LOGIC INPUT        | LOGIC INPUT                                                       | LOGIC INPUT                                                       | LOGIC INPUT                                                      | LOGIC INPUT        | LOGIC INPUT        | LOGIC INPUT        | LOGIC INPUT        |
| Input Voltage Low                             | V IL               |                                                                   |                                                                   | V-                                                               | V-                 | 0.8                | V                  |                    |
| Input Voltage High                            | V IH               |                                                                   |                                                                   | 2.4                                                              | 2.4                | V+                 | V                  |                    |
| Input Current                                 | I IN               | V IN = V-, V+                                                     | V IN = V-, V+                                                     | V IN = V-, V+                                                    | 0.0001             | 1.0                | µA                 |                    |
| SWITCH                                        | SWITCH             | SWITCH                                                            | SWITCH                                                            | SWITCH                                                           | SWITCH             | SWITCH             | SWITCH             | SWITCH             |
| Analog Signal Range                           | V COM, V NO, V NC  |                                                                   |                                                                   | V-                                                               | V-                 | V+                 | V                  |                    |
| On Circuit Resistance                         | R ON               | V COM = +10V, I (NC or NO) = 1mA; M                               | V COM = +10V, I (NC or NO) = 1mA; M                               | V COM = +10V, I (NC or NO) = 1mA; M                              | 20                 | 35                 | Ω                  |                    |
| On Resistance Match Between Channels (Note 4) | R ON               | V COM = -10V, I (NC or NO) = 1mA C, E I (NC or NO) = -10mA, V     | V COM = -10V, I (NC or NO) = 1mA C, E I (NC or NO) = -10mA, V     | V COM = -10V, I (NC or NO) = 1mA C, E I (NC or NO) = -10mA, V    |                    | 45                 | Ω                  |                    |
|                                               | R ON               | T A = +25°C                                                       | T A = +25°C                                                       | T A = +25°C                                                      |                    | 2                  | Ω                  |                    |
|                                               | R ON               | T A = T MIN to T MAX or -10V, V+ =15V, V- = -15V                  | T A = T MIN to T MAX or -10V, V+ =15V, V- = -15V                  | T A = T MIN to T MAX or -10V, V+ =15V, V- = -15V                 |                    | 4                  | Ω                  |                    |
| On Resistance Flatness (Note 4)               | R ON               | I (NC or NO) = -10mA, V D = 5V T A = +25°C                        | I (NC or NO) = -10mA, V D = 5V T A = +25°C                        | I (NC or NO) = -10mA, V D = 5V T A = +25°C                       |                    | 3                  | Ω                  |                    |
| On Resistance Flatness (Note 4)               | R ON               | or -5V, V+ =15V, V- = -15V T A = T MIN to T MAX                   | or -5V, V+ =15V, V- = -15V T A = T MIN to T MAX                   | or -5V, V+ =15V, V- = -15V T A = T MIN to T MAX                  |                    | 5                  | Ω                  |                    |
| On Circuit Leakage Current                    | I COM              |                                                                   |                                                                   | -0.75                                                            | -0.75              | 0.75               | nA                 |                    |
| On Circuit Leakage Current                    | I COM              | V COM = ±15.5V, V NC or V NO = + 15.5V, V+ = 16.5V, V- = -16.5V M | V COM = ±15.5V, V NC or V NO = + 15.5V, V+ = 16.5V, V- = -16.5V M | -1.00 0.20                                                       | -1.00 0.20         | 1.00               | nA                 |                    |
| Off Circuit Leakage Current                   | I NC or I NO       | V COM = ±15.5V V NC or V NO = + 15.5V, V+ = 16.5V, V- = -16.5V M  | V COM = ±15.5V V NC or V NO = + 15.5V, V+ = 16.5V, V- = -16.5V M  | V COM = ±15.5V V NC or V NO = + 15.5V, V+ = 16.5V, V- = -16.5V M | 0.02               | 0.25 0.05          | nA                 |                    |
| DYNAMIC                                       | DYNAMIC            | DYNAMIC                                                           | DYNAMIC                                                           | DYNAMIC                                                          | DYNAMIC            | DYNAMIC            | DYNAMIC            | DYNAMIC            |
| Turn-Off Time                                 | t OFF              | Figure 1                                                          | Figure 1                                                          | Figure 1                                                         |                    | 145                | ns                 |                    |
| Turn-On Time                                  | t ON               |                                                                   |                                                                   |                                                                  |                    | 175                | ns                 |                    |
| Break-Before-Make Time                        | t OPEN             |                                                                   |                                                                   | 10                                                               | 10                 |                    | ns                 |                    |
| Off Capacitance                               | COFF               |                                                                   |                                                                   | 5                                                                | 5                  |                    | pF                 |                    |
| On Capacitance                                | CON                |                                                                   |                                                                   | 5                                                                | 5                  |                    | pF                 |                    |
| Charge Injection                              | Q                  | CL =10nF,V GEN =0V, R GEN =0 Ω , Figure 6                         | T A = +25°C                                                       | T A = +25°C                                                      | 2                  | 10                 | pC                 |                    |
| Off Isolation                                 | OIRR               | f = 1MHz, RL = 75 Ω , V COM = 2.3V RMS                            | f = 1MHz, RL = 75 Ω , V COM = 2.3V RMS                            | f = 1MHz, RL = 75 Ω , V COM = 2.3V RMS                           | 72                 |                    | dB                 |                    |
| Crosstalk                                     | CCRR               |                                                                   |                                                                   |                                                                  | 78                 |                    | dB                 |                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Precision, Quad, SPDT, CMOS Analog Switch

## ELECTRICAL CHARACTERISTICS-DUAL SUPPLIES (continued)

(GND = 0V, V+ = +15V, V- = -15V, TA = TMIN to TMAX, unless otherwise noted.)

| PARAMETER                  | SYMBOL       | CONDITIONS                                                       | CONDITIONS    | MIN         | TYP (Notes 2, 3)   | MAX         | UNITS       |
|----------------------------|--------------|------------------------------------------------------------------|---------------|-------------|--------------------|-------------|-------------|
| LOGIC INPUT                | LOGIC INPUT  | LOGIC INPUT                                                      | LOGIC INPUT   | LOGIC INPUT | LOGIC INPUT        | LOGIC INPUT | LOGIC INPUT |
| Input Voltage Low          | V IL         |                                                                  |               | V-          |                    | 0.8         | V           |
| Input Voltage High         | V IH         |                                                                  |               | 2.4         |                    | V+          | V           |
| Input Current              | I IN         | V IN = V-, V+                                                    | V IN = V-, V+ | -1.0        | 0.0001             | 1.0         | µA          |
| SWITCH                     | SWITCH       | SWITCH                                                           | SWITCH        |             |                    |             |             |
| Analog Signal Range        | VCOM         |                                                                  |               | V-          |                    | V+          | V           |
| On Circuit Resistance      | RON          | V COM = 10V, I (NC or NO) = 1mA; V COM = -10V, I (NC or NO = 1mA | C, E          |             |                    | 45          | Ω           |
|                            | RON          | V COM = 10V, I (NC or NO) = 1mA; V COM = -10V, I (NC or NO = 1mA | M             |             |                    | 45          | Ω           |
| On Circuit Leakage Current | ICOM         | V COM = ±15V, V NC or V NO = -15V, V+ = 16.5V, V- = -16.5V       | C, E          | -10         |                    | 10          | nA          |
| On Circuit Leakage Current | ICOM         | V COM = ±15V, V NC or V NO = -15V, V+ = 16.5V, V- = -16.5V       | M             | -60         |                    | 60          | nA          |
| On Circuit Leakage Current | I NC or I NO | V COM = ±15V, V NC or V NO = -15V, V+ = 16.5V, V- = -16.5V       | C, E          | -6          |                    | 6           | nA          |
| On Circuit Leakage Current | I NC or I NO | V COM = ±15V, V NC or V NO = -15V, V+ = 16.5V, V- = -16.5V       | M             |             |                    |             | nA          |

## ELECTRICAL CHARACTERISTICS-Single Supply

(GND = 0V, V+ = +12V, V- = 0V, TA = +25°C, unless otherwise noted.)

| PARAMETER                   | SYMBOL              | CONDITIONS                                                      | MIN   |   TYP (Notes 2, 3) | MAX   | UNITS   |
|-----------------------------|---------------------|-----------------------------------------------------------------|-------|--------------------|-------|---------|
| SUPPLY                      |                     |                                                                 |       |                    |       |         |
| Supply Voltage Range        | V +                 | Single supply, V- = GND                                         | 10    |                    | 30    | V       |
| Positive Supply Current     | l+                  |                                                                 |       |                    | 0.25  | mA      |
| INPUT                       |                     |                                                                 |       |                    |       |         |
| Input Voltage Low           | V INLO              |                                                                 | 0     |                    | 0.8   | V       |
| Input Voltage High          | V INHI              |                                                                 | 2.4   |                    | V+    | V       |
| Input Current               | I IN                | V IN = V+, 0V                                                   |       |                    | 1     | µA      |
| SWITCH                      |                     |                                                                 |       |                    |       |         |
| Analog Signal Range         | V COM , V NO , V NC |                                                                 | V-    |                    | V+    | V       |
| On Circuit Resistance       | r ON                | V COM = 10V, I( NC or NO) = 1mA, V COM = 1V, I( NC or NO) = 1mA |       |                 35 | 75    | Ω       |
| On Circuit Leakage Current  | I COM               | V COM = 11V, V NC or V NO = 0V V COM = 1V, V NC or V NO = V+    |       |                    | 0.75  | nA      |
| Off Circuit Leakage Current | I NC or I NO        | V COM = 11V V NC or V NO = 1V                                   |       |                    | 0.25  | nA      |
| DYNAMIC                     |                     |                                                                 |       |                    |       |         |
| Turn-Off Time               | t OFF               | Figure 1                                                        |       |                 45 |       | ns      |
| Turn-On Time                | t ON                |                                                                 |       |                 90 |       | ns      |
| Break-Before-Make Time      | t OPEN              |                                                                 | 5     |                 10 |       | ns      |
| Off Isolation               | OIRR                | f = 1MHz, R L = 75 Ω , V COM = 2.3V RMS                         |       |                 70 |       | dB      |
| Crosstalk                   | CCRR                |                                                                 |       |                 72 |       | dB      |

Note 2: The algebraic convention, whereby the most negative value is a minimum and the most positive is a maximum, is used in this data sheet.

Note 3:

Typical values are for design aid only, not guaranteed or subject to production testing.

Note 4: On resistance match between channels and flatness are guaranteed only with bipolar-supply operation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Precision, Quad, SPDT, CMOS Analog Switch

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(TA = +25°C, unless otherwise noted).

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Precision, Quad, SPDT, CMOS Analog Switch

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN           | NAME      | FUNCTION                 |
|---------------|-----------|--------------------------|
| 1, 10, 11, 20 | IN1-IN4   | Logic-Level Inputs       |
| 2, 9, 12, 19  | NO1-NO4   | Normally Open Switches   |
| 3, 8, 13, 18  | COM1-COM4 | Common Switch Poles      |
| 4, 7, 14, 17  | NC1-NC4   | Normally Closed Switches |
| 5             | V-        | Negative Power Supply    |
| 6             | GND       | Ground                   |
| 15            | N.C.      | Not Internally Connected |
| 16            | V+        | Positive Power Supply    |

## \_\_\_\_\_\_\_\_\_\_Applications Information

## Operation with Supply Voltages Other than ±15V o

The main limitation of supply voltages other than ±15V is a reduction in the analog signal range.  The MAX333A operates with ±5V to ±20V bipolar supplies.  The Typical Operating Characteristics and graphs show typi cal  on  resistance for ±15V, ±10V, ±5 supplies. Switching times increase by a factor of two or more for ±5V operation.  The MAX333A can operate from +10V to  +24V unipolar supplies.  It can be powered from a single +10V to +24V supply, as well as from unbalanced supplies such as +24V and -5V.  Connect V- to 0V when operating with a single supply.

## Overvoltage Protection

Proper power-supply sequencing is recommended for all  CMOS devices.  It is important not to exceed the absolute maximum ratings because stresses beyond the listed ratings may cause permanent damage to the devices.  Always sequence V+ on first, followed by VL, V-, and logic inputs.  If power-supply sequencing is not possible, add two small signal diodes in series with the supply pins (Figure 1).  Adding the diodes reduces the analog signal range to 1V below V+ and 1V below V-, but low switch resistance and low leakage characteristics are unaffected.

Figure 1. Overvoltage Protection Using Blocking Diodes

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Test Circuits/Timing Diagrams

<!-- image -->

Figure 2.  Switching-Time Test Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Precision, Quad, SPDT, CMOS Analog Switch

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Test Circuits/Timing Diagrams

<!-- image -->

Figure 3.  Channel-Off Capacitance

<!-- image -->

Figure 4.  Channel-On Capacitance

Figure 5.  Break-Before-Make

<!-- image -->

Figure 6.  Charge Injection

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Precision, Quad, SPDT, CMOS Analog Switch

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Test Circuits/Timing Diagrams (continued)

<!-- image -->

Figure 7.  Off-Isolation

<!-- image -->

Figure 8.  Crosstalk

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Precision, Quad, SPDT, CMOS Analog Switch

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Topography

<!-- image -->

TRANSISTOR COUNT:  145; SUBSTRATE CONNECTED TO V+.

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

<!-- image -->