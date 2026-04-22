<!-- lastmod 2023-08-11 -->
V1.08

## QMOT QSH8618 MANUAL

+

<!-- image -->

+

<!-- image -->

TRINAMIC Motion Control GmbH &amp; Co. KG Hamburg, Germany www.trinamic.com

+

+

QSH-8618

-65-59-340

86mm

3.0A (SER)/5.9A (PAR)

## -80-55-460

86mm

5.5A, 4.6Nm

## -96-55-700

## 86mm

5.5A, 7.0Nm

## -118-60-870

## 86mm

6.0A, 8.7Nm

-156-62-1280 86mm 6.2A, 12.8Nm

## Table of contents

| 1   | Life support policy............................................................................................................................        | Life support policy............................................................................................................................   |
|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| 2   | Features ........................................................................................................................................... 6 |                                                                                                                                                   |
| 3   | Order Codes ..................................................................................................................................... 8    |                                                                                                                                                   |
| 4   | Dimensions of the QSH8618 motors................................................................................................ 9                     |                                                                                                                                                   |
| 5   | Leadwire configurations of the QSH8618 motors ......................................................................... 10                             |                                                                                                                                                   |
| 5.1 | QSH8618-65-59-340 leadwire configuration ......................................................................... 10                                  |                                                                                                                                                   |
| 5.2 | QSH8618-80-55-460 leadwire configuration ......................................................................... 10                                  |                                                                                                                                                   |
| 5.3 | QSH8618-96-55-700 leadwire configuration ......................................................................... 10                                  |                                                                                                                                                   |
| 5.4 | QSH8618-118-60-870 leadwire configuration ....................................................................... 11                                   |                                                                                                                                                   |
| 5.5 | QSH8618-156-62-1280 leadwire configuration ..................................................................... 11                                    |                                                                                                                                                   |
| 6   | 12                                                                                                                                                     |                                                                                                                                                   |
|     | Torque figures................................................................................................................................         |                                                                                                                                                   |
|     | 6.2 QSH8618-80-55-460............................................................................................................... 12                |                                                                                                                                                   |
|     | 6.3 QSH8618-96-55-700............................................................................................................... 13                |                                                                                                                                                   |
| 6.4 | QSH8618-118-60-870............................................................................................................. 13                     |                                                                                                                                                   |
|     | 6.5 QSH8618-156-62-1280........................................................................................................... 14                  |                                                                                                                                                   |
| 7   | Considerations for operation......................................................................................................... 15               |                                                                                                                                                   |
| 7.1 | Choosing the best fitting motor for an application................................................................ 15                                  |                                                                                                                                                   |
|     | 7.1.1 Determining the maximum torque required by your application................................. 15                                                  |                                                                                                                                                   |
|     | Choosing the optimum current setting ......................................................................... 16                                      |                                                                                                                                                   |
|     | 7.2.1                                                                                                                                                  |                                                                                                                                                   |
| 7.3 | 7.2.2 Choosing the standby current ....................................................................................... 16                          |                                                                                                                                                   |
|     | Motor Driver Supply Voltage.................................................................................................. 16                       |                                                                                                                                                   |
|     | 7.3.1 Determining if the given driver voltage is sufficient ..................................................... 17                                   |                                                                                                                                                   |
| 7.4 | Back EMF (BEMF).................................................................................................................... 17                 |                                                                                                                                                   |
| 7.5 | Choosing the Commutation Scheme...................................................................................... 18                               |                                                                                                                                                   |
|     | 7.5.1 Fullstepping ................................................................................................................... 19              |                                                                                                                                                   |
|     | Revision history.............................................................................................................................. 19      |                                                                                                                                                   |
| 8   | 8.1 Document revision ................................................................................................................. 19             |                                                                                                                                                   |

## 1 Life support policy

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.

Life support systems are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

## © TRINAMIC Motion Control GmbH &amp; Co. KG 2011

Information given in this data sheet is believed to be accurate and reliable. However neither responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties, which may result from its use.

Specifications are subject to change without notice.

<!-- image -->

## 2 Features

These four phase hybrid stepper motors are optimized for microstepping and give a good fit to the TRINAMIC family of motor controllers and drivers.

## Main characteristics:

- NEMA 34 mounting configuration
- flange max. 85.85mm * 85.85mm
- step angle: 1.8˚
- optimized for microstep operation
- optimum fit for TMC239/TMC249 based driver circuits, e.g. TMCM-078
- Neodymium magnets for maximal torque
- 4 wire connection
- CE approved

| Specifications                                | Units   | QSH8618     | QSH8618     | QSH8618     | QSH8618    | QSH8618     | QSH8618       |
|-----------------------------------------------|---------|-------------|-------------|-------------|------------|-------------|---------------|
| Specifications                                | Units   | -65-59- 340 | -65-59- 340 | -80-55- 460 | -96-55-700 | -118-60-870 | -156-62- 1280 |
| Wiring                                        |         | PAR         | SER         |             |            |             |               |
| Rated Voltage                                 | V       | 1.65        | 3.42        | 2.3         | 2.56       | 2.7         | 3.5           |
| Rated Phase Current (nominal)                 | A       | 5.9         | 3           | 5.5         | 5.5        | 6           | 6.2           |
| Phase Resistance at 20°C                      | Ω       | 0.28        | 1.14        | 0.42        | 0.45       | 0.45        | 0.75          |
| Phase Inductance (typ.)                       | mH      | 1.7         | 6.8         | 3.5         | 4.5        | 5.1         | 9             |
| Holding Torque (typ.)                         | Nm      | 3.4         | 3.4         | 4.6         | 7.0        | 8.7         | 12.8          |
| Detent Torque                                 | Nm      | 0.078       | 0.078       | 0.117       |            | 0.235       | 0.353         |
| Rotor Inertia                                 | gcm 2   | 1000        | 1000        | 1400        | 2700       | 2700        | 4000          |
| Weight (Mass)                                 | Kg      | 1.7         | 1.7         | 2.3         | 2.8        | 3.8         | 5.4           |
| Insulation Class                              |         | B           | B           | B           | B          | B           | B             |
| Insulation Resistance                         | Ω       | 100M        | 100M        | 100M        | 100M       | 100M        | 100M          |
| Dialectic Strength (for one minute)           | VAC     | 500         | 500         | 500         | 500        | 500         | 500           |
| Connection Wires                              | N°      | 8           | 8           | 4           | 4          | 4           | 4             |
| Max applicable Voltage                        | V       | 100         | 100         | 140         | 140        | 140         | 160           |
| Step Angle                                    | °       | 1.8         | 1.8         | 1.8         | 1.8        | 1.8         | 1.8           |
| Step angle Accuracy                           | %       | 5           | 5           | 5           | 5          | 5           | 5             |
| Flange Size (max.)                            | mm      | 85.85       | 85.85       | 85.85       | 85.85      | 85.85       | 85.85         |
| Motor Length (max.)                           | mm      | 65.0        | 65.0        | 80.0        | 96         | 118.0       | 156.0         |
| Axis Diameter                                 | mm      | 12.0        | 12.0        | 12.7        | 12.7       | 12.7        | 15.875        |
| Axis Length (visible part, typ.)              | mm      | 31.75       | 31.75       | 31.75       | 31.75      | 24.0        | 24.0          |
| Axis D-cut (1.1mm depth)                      | mm      | -           | -           | 25.0        | 25.0       | (25.0)      | (25.0)        |
| Shaft Radial Play (450g load)                 | mm      | 0.02        | 0.02        | 0.02        | 0.02       | 0.02        | 0.02          |
| Shaft Axial Play (450g load)                  | mm      | 0.08        | 0.08        | 0.08        | 0.08       | 0.08        | 0.08          |
| Maximum Radial Force (20 mmfrom front flange) | N       | 220         | 220         | 220         | 220        | 220         | 220           |

Table 2.1: Motor technical data

| Maximum Axial Force                   | N   | 60       | 60       | 60       | 60       | 60       |
|---------------------------------------|-----|----------|----------|----------|----------|----------|
| Ambient Temperature                   | °C  | - 20…+50 | - 20…+50 | - 20…+50 | - 20…+50 | - 20…+50 |
| Temp Rise (rated current, 2 phase on) | °C  | max. 80  | max. 80  | max. 80  | max. 80  | max. 80  |
| Winding Thermal Time Constant         | min |          |          | 58       |          | 60       |
| Surface Thermal Time Constant         | min |          |          | 64       |          | 60       |

## 3 Order Codes

Table 3.1: Order codes

| Order code          | Description                                           | Dimensions (mm)       |
|---------------------|-------------------------------------------------------|-----------------------|
| QSH8618-65-59-340   | QMot stepper motor 86mm, 3.0A (SER)/5.9A (PAR), 3.4Nm | 85.85 x 85.85 x 65.0  |
| QSH8618-80-55-460   | QMot stepper motor 86mm, 5.5A, 4.6Nm                  | 85.85 x 85.85 x 80.0  |
| QSH8618-96-55-700   | QMot stepper motor 86mm, 5.5A, 7.0Nm                  | 85.85 x 85.85 x 96.0  |
| QSH8618-118-60-870  | QMot stepper motor 86mm, 6.0A, 8.7Nm                  | 85.85 x 85.85 x 118.0 |
| QSH8618-156-62-1280 | QMot stepper motor 86mm, 6.2A, 12.8Nm                 | 85.85 x 85.85 x 156.0 |

## 4 Dimensions of the QSH8618 motors

85.9

Figure 4.1: Dimensions of the QSH8618 motor family

<!-- image -->

## 5 Leadwire configurations of the QSH8618 motors

## 5.1 QSH8618-65-59-340 leadwire configuration

Table 5.1: QSH8618-65-59-340 leadwire configuration

| Cable type   | Gauge        | Coil   | Function           | Length       |
|--------------|--------------|--------|--------------------|--------------|
| Red          | UL1430 AWG20 | A      | Motor coil A pin 1 | 300mm+/-10mm |
| Yellow       | UL1430 AWG20 | A-     | Motor coil A pin 2 | 300mm+/-10mm |
| Blue         | UL1430 AWG20 | C-     | Motor coil C pin 2 | 300mm+/-10mm |
| Black        | UL1430 AWG20 | C      | Motor coil C pin 1 | 300mm+/-10mm |
| White        | UL1430 AWG20 | B      | Motor coil B pin 1 | 300mm+/-10mm |
| Orange       | UL1430 AWG20 | B-     | Motor coil B pin 2 | 300mm+/-10mm |
| Brown        | UL1430 AWG20 | D-     | Motor coil D pin 2 | 300mm+/-10mm |
| Green        | UL1430 AWG20 | D      | Motor coil D pin 1 | 300mm+/-10mm |

## Please note:

- -For parallel configuration (PAR) connect A with C- and A- with C for one coil and B with Dand B- with D for the other coil.
- -For connection in series (SER) connect A- and C-. The feed-in is at A and C.  Connect further B- and D-. The feed-in is at B and D.

## 5.2 QSH8618-80-55-460 leadwire configuration

Table 5.2: QSH8618-80-55-460 leadwire configuration

| Cable type   | Gauge        | Coil   | Function           | Length       |
|--------------|--------------|--------|--------------------|--------------|
| Red          | UL1430 AWG20 | A      | Motor coil A pin 1 | 300mm+/-10mm |
| White        | UL1430 AWG20 | A-     | Motor coil A pin 2 | 300mm+/-10mm |
| Yellow       | UL1430 AWG20 | B      | Motor coil B pin 1 | 300mm+/-10mm |
| Green        | UL1430 AWG20 | B-     | Motor coil B pin 2 | 300mm+/-10mm |

## 5.3 QSH8618-96-55-700 leadwire configuration

Table 5.3: QSH8618-96-55-700 leadwire configuration

| Cable type   | Gauge        | Coil   | Function           | Length       |
|--------------|--------------|--------|--------------------|--------------|
| Red          | UL1430 AWG20 | A      | Motor coil A pin 1 | 300mm+/-10mm |
| White        | UL1430 AWG20 | A-     | Motor coil A pin 2 | 300mm+/-10mm |
| Yellow       | UL1430 AWG20 | B      | Motor coil B pin 1 | 300mm+/-10mm |
| Green        | UL1430 AWG20 | B-     | Motor coil B pin 2 | 300mm+/-10mm |

## 5.4 QSH8618-118-60-870 leadwire configuration

Table 5.4: QSH8618-118-60-870 leadwire configuration

| Cable type   | Gauge        | Coil   | Function           | Length       |
|--------------|--------------|--------|--------------------|--------------|
| Red          | UL1430 AWG20 | A      | Motor coil A pin 1 | 300mm+/-10mm |
| White        | UL1430 AWG20 | A-     | Motor coil A pin 2 | 300mm+/-10mm |
| Yellow       | UL1430 AWG20 | B      | Motor coil B pin 1 | 300mm+/-10mm |
| Green        | UL1430 AWG20 | B-     | Motor coil B pin 2 | 300mm+/-10mm |

## 5.5 QSH8618-156-62-1280 leadwire configuration

Table 5.5: QSH8618-156-62-1280 leadwire configuration

| Cable type   | Gauge        | Coil   | Function           | Length       |
|--------------|--------------|--------|--------------------|--------------|
| Red          | UL1430 AWG20 | A      | Motor coil A pin 1 | 300mm+/-10mm |
| White        | UL1430 AWG20 | A-     | Motor coil A pin 2 | 300mm+/-10mm |
| Yellow       | UL1430 AWG20 | B      | Motor coil B pin 1 | 300mm+/-10mm |
| Green        | UL1430 AWG20 | B-     | Motor coil B pin 2 | 300mm+/-10mm |

## 6 Torque figures

The torque figures detail motor torque characteristics for full step operation in order to allow simple comparison. For half step operation there are always a number of resonance points (with less torque) which are not depicted. These will be minimized by microstep operation in most applications.

## 6.1 QSH8618-65-59-340

Testing conditions: 48V; 6.0A RMS coil current, parallel connection of coils (PAR), full step operation

Figure 6.1: QSH8618-65-59-340 speed vs. torque characteristics

<!-- image -->

## 6.2 QSH8618-80-55-460

Testing conditions: 48V; 5.5A RMS coil current, full step operation

Figure 6.2: QSH8618-80-55-460 speed vs. torque characteristics

<!-- image -->

## 6.3 QSH8618-96-55-700

Testing conditions: 48V; 5.5A RMS coil current, full step operation

Table 6.3: QSH8618-96-55-700 speed vs. torque characteristics

<!-- image -->

## 6.4 QSH8618-118-60-870

Testing conditions: 100V; 6.0A RMS coil current, full step operation

Figure 6.4: QSH8618-118-60-870 speed vs. torque characteristics

<!-- image -->

## 6.5 QSH8618-156-62-1280

Testing conditions: 100V; 6.0A RMS coil current, full step operation

Figure 6.5: QSH8618-156-62-1280 speed vs. torque characteristics

<!-- image -->

## 7 Considerations for operation

The following chapters try to help you to correctly set the key operation parameters in order to get a stable system.

## 7.1 Choosing the best fitting motor for an application

For an optimum solution it is important to fit the motor to the application and to choose the best mode of operation. The key parameters are the desired motor torque and velocity. While the motor holding torque describes the torque at stand-still, and gives a good indication for comparing different motors, it is not the key parameter for the best fitting motor. The required torque is a result of static load on the motor, dynamic loads which occur during acceleration/deceleration and loads due to friction. In most applications the load at maximum desired motor velocity is most critical, because of the reduction of motor torque at higher velocity. While the required velocity generally is well known, the required torque often is only roughly known. Generally, longer motors and motors with a larger diameter deliver a higher torque. But, using the same driver voltage for the motor, the larger motor earlier looses torque when increasing motor velocity. This means, that for a high torque at a high motor velocity, the smaller motor might be the fitting solution. Please refer to the torque vs. velocity diagram to determine the best fitting motor, which delivers enough torque at the desired velocities.

## 7.1.1 Determining the maximum torque required by your application

Just try a motor with a torque 3050% above the application's maximum requirement. Take into consideration worst case conditions, i.e. minimum driver supply voltage and minimum driver current, maximum or minimum environment temperature (whichever is worse) and maximum friction of mechanics. Now, consider that you want to be on the safe side, and add some 10 percent safety margin to take into account for unknown degradation of mechanics and motor. Therefore try to get a feeling for the motor reliability at slightly increased load, especially at maximum velocity. That is also a good test to check the operation at a velocity a little higher than the maximum application velocity.

## 7.2 Motor Current Setting

Basically, the motor torque is proportional to the motor current, as long as the current stays at a reasonable level. At the same time, the power consumption of the motor (and driver) is proportional to the square of the motor current. Optimally, the motor should be chosen to bring the required performance at the rated motor current. For a short time, the motor current may be raised above this level in order to get increased torque, but care has to be taken in order not to exceed the maximum coil temperature of 130°C respectively a continuous motor operation temperature of 90°C.

| Percentage of rated current   | Percentage of motor torque   | Percentage of static motor power dissipation   | Comment                                                                              |
|-------------------------------|------------------------------|------------------------------------------------|--------------------------------------------------------------------------------------|
| 150%                          | ≤150%                        | 225%                                           | Limit operation to a few seconds                                                     |
| 125%                          | 125%                         | 156%                                           | Operation possible for a limited time                                                |
| 100%                          | 100%                         | 100% = 2 * I RMS_RATED * R COIL                | Normal operation                                                                     |
| 85%                           | 85%                          | 72%                                            | Normal operation                                                                     |
| 75%                           | 75%                          | 56%                                            | Normal operation                                                                     |
| 50%                           | 50%                          | 25%                                            | Reduced microstep exactness due to torque reducing in the magnitude of detent torque |

Table 7.1: Motor current settings

| 38%   | 38%               | 14%   | - ' -                                                               |
|-------|-------------------|-------|---------------------------------------------------------------------|
| 25%   | 25%               | 6%    | - ' -                                                               |
| 0%    | see detent torque | 0%    | Motor might loose position if the application's friction is too low |

## 7.2.1 Choosing the optimum current setting

Generally, you choose the motor in order to give the desired performance at nominal current. For short time operation, you might want to increase the motor current to get a higher torque than specified for the motor. In a hot environment, you might want to work with a reduced motor current in order to reduce motor self heating.

## The Trinamic drivers allow setting the motor current for up to three conditions:

- -Stand still (choose a low current)
- -Nominal operation (nominal current)
- -High acceleration (if increased torque is required: You may choose a current above the nominal setting, but be aware, that the mean power dissipation shall not exceed the motors nominal rating)

## 7.2.2 Choosing the standby current

Most applications do not need much torque during motor standstill. You should always reduce the motor current during standstill. This reduces power dissipation and heat generation. Depending on your application, you typically at least can half power dissipation. There are several aspects why this is possible: In standstill, motor torque is higher than at any other velocity. Thus, you do not need the full current even with a static load! Your application might need no torque at all, but you might need to keep the exact microstep position: Try how low you can go in your application. If the microstep position exactness does not matter for the time of standstill, you might even reduce the motor current to zero, provided that there is no static load on the motor and enough friction in order to avoid complete position loss.

## 7.3 Motor Driver Supply Voltage

The driver supply voltage in many applications cannot be chosen freely, because other components have a fixed supply voltage of e.g. 24V DC. If you have the possibility to choose the driver supply voltage, please refer to the driver data sheet and consider that a higher voltage means a higher torque at higher velocity. The motor torque diagrams are measured for a given supply voltage. You typically can scale the velocity axis (steps/sec) proportionally to the supply voltage to adapt the curve, e.g. if the curve is measured for 48V and you consider operation at 24V, half all values on the x-Axis to get an idea of the motor performance.

For a chopper driver, consider the following corner values for the driver supply voltage (motor voltage). The table is based on the nominal motor voltage, which normally just has a theoretical background in order to determine the resistive loss in the motor.

## Comment on the nominal motor voltage:

(Please refer to motor technical data table.)

UCOIL\_NOM = I RMS\_RATED * RCOIL

Table 7.2: Driver supply voltage considerations

| Parameter                           | Value                                  | Comment                                                                                                                                                                                                       |
|-------------------------------------|----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Minimum driver supply voltage       | 2 * U COIL_NOM                         | Very limited motor velocity. Only slow movement without torque reduction. Chopper noise might become audible.                                                                                                 |
| Optimum driver supply voltage       | ≥ 4 * U COIL_NOM and ≤ 22 * U COIL_NOM | Choose the best fitting voltage in this range using the motor torque curve and the driver data. You can scale the torque curve proportionally to the actual driver supply voltage.                            |
| Maximum rated driver supply voltage | 25 * U COIL_NOM                        | When exceeding this value, the magnetic switching losses in the motor reach a relevant magnitude and the motor might get too hot at nominal current. Thus there is no benefit in further raising the voltage. |

## 7.3.1 Determining if the given driver voltage is sufficient

Try to brake the motor and listen to it at different velocities. Does the sound of the motor get raucous or harsh when exceeding some velocity? Then the motor gets into a resonance area. The reason is that the motor back-EMF voltage reaches the supply voltage. Thus, the driver cannot bring the full current into the motor any more. This is typically a sign, that the motor velocity should not be further increased, because resonances and reduced current affect motor torque.

## Measure the motor coil current at maximum desired velocity

For microstepping:

If the waveform is still basically sinusoidal, the motor driver supply voltage is sufficient.

For Fullstepping:

If the motor current still reaches a constant plateau, the driver voltage is sufficient.

If you determine, that the voltage is not sufficient, you could either increase the voltage or reduce the current (and thus torque).

## 7.4 Back EMF (BEMF)

Within SI units, the numeric value of the BEMF constant has the same numeric value as the numeric value of the torque constant. For example, a motor with a torque constant of 1 Nm/A would have a BEMF constant of 1V/rad/s. Turning such a motor with 1 rps (1 rps = 1 revolution per second = 6.28 rad/s) generates a BEMF voltage of 6.28V.

The Back EMF constant can be calculated as:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

The voltage is valid as RMS voltage per coil, thus the nominal current INOM is multiplied by 2 in this formula, since the nominal current assumes a full step position, with two coils switched on. The torque is in unit [Nm] where 1Nm = 100cNm = 1000mNm.

One can easily measure the BEMF constant of a two phase stepper motor with a (digital) scope. One just has to measure the voltage of one coil (one phase) when turning the axis of the motor manually. With this, one gets a voltage (amplitude) and a frequency of a periodic voltage signal (sine wave). The full step frequency is 4 times the frequency the measured sine wave.

## 7.5 Choosing the Commutation Scheme

While the motor performance curves are depicted for fullstepping and halfstepping, most modern drivers provide a microstepping scheme. Microstepping uses a discrete sine and a cosine wave to drive both coils of the motor, and gives a very smooth motor behavior as well as an increased position resolution. The amplitude of the waves is 1.41 times the nominal motor current, while the RMS values equal the nominal motor current. The stepper motor does not make loud steps any more -it turns smoothly! Therefore, 16 microsteps or more are recommended for a smooth operation and the avoidance of resonances. To operate the motor at fullstepping, some considerations should be taken into account.

Table 7.3: Comparing microstepping and fullstepping

| Driver Scheme                                               | Resolution                                | Velocity range                                                            | Torque                                                                       | Comments                                                              |
|-------------------------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Fullstepping                                                | 200 steps per rotation                    | Low to very high. Skip resonance areas in low to medium velocity range.   | Full torque if dam- pener used, otherwise reduced torque in re- sonance area | Audible noise especially at low velocities                            |
| Halfstepping                                                | 200 steps per rotation * 2                | Low to very high. Skip resonance areas in low to me- dium velocity range. | Full torque if dam- pener used, otherwise reduced torque in re- sonance area | Audible noise especially at low velocities                            |
| Microstepping                                               | 200 * (number of microsteps) per rotation | Low to high.                                                              | Reduced torque at very high velocity                                         | Low noise, smooth motor behavior                                      |
| Mixed: Micro- stepping and fullstepping for high velocities | 200 * (number of microsteps) per rotation | Low to very high.                                                         | Full torque                                                                  | At high velocities, there is no audible difference for full- stepping |

Microstepping gives the best performance for most applications and can be considered as state-ofthe art. However, fullstepping allows some ten percent higher motor velocities, when compared to microstepping. A combination of microstepping at low and medium velocities and fullstepping at high velocities gives best performance at all velocities and is most universal. Most Trinamic driver modules support all three modes.

## 7.5.1 Fullstepping

When operating the motor in fullstep, resonances may occur. The resonance frequencies depend on the motor load. When the motor gets into a resonance area, it even might not turn anymore! Thus you should avoid resonance frequencies.

## 7.5.1.1 Avoiding motor resonance in fullstep operation

Do not operate the motor at resonance velocities for extended periods of time. Use a reasonably high acceleration in order to accelerate to a resonance-free velocity. This avoids the build-up of resonances. When resonances occur at very high velocities, try reducing the current setting.

A resonance dampener might be required, if the resonance frequencies cannot be skipped.

## 8 Revision history

## 8.1 Document revision

Table 8.1: Document revision

|   Version | Date            | Author   | Description                                                                    |
|-----------|-----------------|----------|--------------------------------------------------------------------------------|
|      1    | Initial Version | GE       | Initial version                                                                |
|      1.01 | 2008-MAR-20     | GE       | Picture of motor has been added                                                |
|      1.02 | 2008-APR-01     | GE       | Max. operating voltage added                                                   |
|      1.03 | 2009-MAY-15     | SD       | QSH8618-96-55-700 added, dimension drawings renewed, minor changes             |
|      1.04 | 2010-OCT-12     | SD       | Minor changes                                                                  |
|      1.05 | 2010-OCT-25     | SD       | QSH8618-65-59-340 leadwire configuration corrected.                            |
|      1.06 | 2011-MAR-18     | SD       | Dimensions corrected and updated                                               |
|      1.07 | 2019-DEC-11     | SK       | Motor drawings updated.                                                        |
|      1.08 | 2020-AUG-13     | SK       | Motor cable length information added. Thermal time constant information added. |