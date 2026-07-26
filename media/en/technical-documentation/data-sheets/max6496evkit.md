<!-- lastmod 2022-08-03 -->
## General Description

The MAX6496 evaluation kit (EV kit) demonstrates a highvoltage, overvoltage-protection circuit for automotive applications that must survive load-dump and high-voltage transient conditions. This EV kit is a fully assembled and tested surface-mount printed-circuit board (PCB).

The MAX6496 EV kit supports high-output currents of up to 5A and can run at voltages up to 72V. An onboard p-channel MOSFET provides reverse-battery protection.

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| C1, C2        |     2 | 22µF ±20%, 100V aluminum electrolytic capacitors Vishay 222215369229                |
| C3            |     1 | 0.1µF ±10%, 100V X7R ceramic capacitor (1206) TDK C3216X7R2A104K AVX 12061C104KAT2A |
| C4            |     0 | Not installed, capacitor (1206)                                                     |
| J1, J2, J3    |     3 | 3-pin headers                                                                       |

<!-- image -->

## Features

- ♦ 5.5V to 72V Wide Supply Voltage Range
- ♦ Up to 5A Output Current Capacity
- ♦ Selectable Overvoltage Mode and OvervoltageLimiter Mode
- ♦ Adjustable Overvoltage Threshold
- ♦ 100V Reverse-Battery Protection

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX6496EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| Q1            |     1 | 100V, 23A p-channel MOSFET International Rectifier IRF9540NSPBF Fairchild FQB22P10TM_NL |
| Q2            |     1 | 100V, 33A n-channel MOSFET International Rectifier IRF540NSPBF Fairchild FQB33N10TM_NL  |
| R1            |     1 | 649k Ω ±1% resistor (0805)                                                              |
| R2            |     1 | 49.9k Ω ±1% resistor (0805)                                                             |
| R3            |     0 | Not installed, resistor (0805)                                                          |
| U1            |     1 | MAX6496ATA+ (8-pin TDFN)                                                                |
| -             |     1 | PCB: MAX6496 Evaluation Kit+                                                            |

## Component Suppliers

| SUPPLIER                | PHONE        | FAX            | WEBSITE               |
|-------------------------|--------------|----------------|-----------------------|
| AVX Corp.               | 602-678-0384 | 602-678-0385   | www.avx.com           |
| Fairchild Semiconductor | 888-522-5372 | Local Rep Only | www.fairchildsemi.com |
| International Rectifier | 310-322-3331 | 310-322-3332   | www.irf.com           |
| TDK Corp.               | 847-390-4373 | 847-390-4428   | www.component.tdk.com |
| Vishay                  | 402-563-6866 | 402-563-6296   | www.vishay.com        |

Note: Indicate that you are using the MAX6496 when contacting these component suppliers.

1

## MAX6496 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- DC power supply (0 to 20V or above, 5A)
- Voltmeter or oscilloscope

## Procedure

The MAX6496 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect a DC power supply (0 to 20V or above, 5A or depending on load) to IN1 and GND.
- 2) Connect a voltmeter or oscilloscope and a load (if desired) to OUT and GND.
- 3) Make sure the J3 shunt connects pins 2-3 (overvoltage mode). The J1 shunt should connect pins 1-2, and the J2 shunt should connect pins 1-2.
- 4) Turn on the power supply and increase the input voltage. The output turns on when the input voltage reaches 5.5V. Increase the supply voltage further; the output turns off when the input voltage reaches 17.4V.
- 5) The steps above can be followed for a power supply  connected to IN2. The thresholds for turn-on and turn-off are higher due to the voltage drop across the reverse-battery protection.

## Detailed Description

The MAX6496 EV kit demonstrates a high-voltage, overvoltage-protection circuit for automotive applications that must survive load-dump and high-voltage transient conditions. The MAX6496 EV kit can be configured in overvoltage mode or overvoltage-limiter mode by setting  jumper J3 (see Table 1 for jumper settings) and can supply up to 5A of output current.

The MAX6496 EV kit has two positive power-supply inputs, IN1 and IN2. Input IN2 connects to the p-channel  MOSFET for reverse-battery protection; input IN1 bypasses the MOSFET.

## Table 1. Jumper Settings (J1, J2, and J3)

| JUMPER   | SHUNT POSITION AND FUNCTION   | SHUNT POSITION AND FUNCTION   |
|----------|-------------------------------|-------------------------------|
|          | 1-2                           | 2-3                           |
| J1       | U1 enabled*                   | U1 disabled                   |
| J2       | Q1 gate drive enabled*        | Q1 gate drive disabled        |
| J3       | Overvoltage-limiter mode      | Overvoltage mode*             |

## Overvoltage Mode

In  overvoltage mode, the MAX6496 monitors the input voltage and turns off the series-pass n-channel MOSFET (Q2) when the input voltage exceeds the programmed threshold voltage. As soon as the input voltage drops below the overvoltage threshold, the charge pump of the MAX6496 fully enhances MOSFET Q2 to turn the output back on. The voltage-divider formed by R1 and R2 sets the threshold voltage. The resistors provided in the MAX6496 EV kit set the threshold at 17.4V. If input IN2 is used, the threshold will be slightly higher due to the voltage drop across Q1.

The overvoltage threshold can be adjusted by varying resistors R1 or R2 using the equation below:

<!-- formula-not-decoded -->

where V OV is  the  desired  overvoltage threshold. To maintain threshold accuracy, R2 must be less than 250k Ω . Since the EV kit ships with R2 set at 49.9k Ω , an easy way to change the threshold is to change R1 only, using the formula above.

## Overvoltage-Limiter Mode

In  overvoltage-limiter mode, the MAX6496 monitors the output voltage instead of the input voltage. The output voltage is sensed through the same voltage-divider formed by resistors R1 and R2, so the equation given for overvoltage mode also applies to the threshold voltage in  the  overvoltage-limiter mode. During an inputovervoltage transient in this mode, the MOSFET switches off until the output voltage falls to 95% of the threshold voltage, and then the MOSFET switches back on. This cycle repeats, generating a sawtooth waveform on the output.

The minimum output voltage in overvoltage-limiter mode depends on load current, output capacitance, and the MOSFET's switching period. The MAX6496 EV kit comes with one 22µF capacitor at the output to supply the load during the time when the MOSFET is off.

Add capacitor C4 on the gate of MOSFET Q2 to decrease the frequency of the sawtooth waveform. This helps limit the device's power dissipation.

## Jumper Selection

Jumper J3 selects between overvoltage mode and overvoltage-limiter mode; do not leave this jumper unconnected. Jumper J2 controls the gate drive of p-channel MOSFET Q1, used as reverse-battery protection. Use J2 to disconnect the MAX6496 from Q1 when

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

reverse-battery protection is not used; do not leave this jumper unconnected. Jumper J1 controls the SHDN pin of the MAX6496 and can enable or disable the MOSFET Q2 enhancement. Table 1 lists the jumper options.

## MAX6496 Evaluation Kit

To filter fast transients that may be present at the input from reaching the MAX6496, cut the small trace connecting the two pads of R3 and place a small resistor (10 Ω , for example) on the board.

<!-- image -->

Figure 1.  MAX6496 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6496 Evaluation Kit

Figure 2.  MAX6496 EV Kit Component Placement Guide-

<!-- image -->

Component Side

<!-- image -->

Figure 3.  MAX6496 EV Kit PCB Layout-Component Side

Figure 4.  MAX6496 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4